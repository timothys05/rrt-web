import { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import JSZip from 'jszip';

// Strip trailing slash from URL; strip leading '?' from SAS token if present
const AZURE_STORAGE_URL = (process.env.REACT_APP_AZURE_URL || '').replace(/\/$/, '');
const AZURE_SAS_TOKEN = (process.env.REACT_APP_AZURE_SAS_TOKEN || '').replace(/^\?/, '');

function ReportScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const prevState = location.state;

  const [report, setReport] = useState({
    injuredFirstName: '',
    injuredLastName: '',
    natureOfAccident: '',
    locationOfAccident: '',
    accidentDate: '',
    accidentTime: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Guard: must arrive here via profile screen
  if (!prevState?.union || !prevState?.profile) {
    return <Navigate to="/" replace />;
  }

  const validate = () => {
    const errs = {};
    if (!report.injuredFirstName.trim()) errs.injuredFirstName = 'Required';
    if (!report.injuredLastName.trim()) errs.injuredLastName = 'Required';
    if (!report.natureOfAccident.trim()) errs.natureOfAccident = 'Required';
    if (!report.locationOfAccident.trim()) errs.locationOfAccident = 'Required';
    if (!report.accidentDate) errs.accidentDate = 'Required';
    if (!report.accidentTime) errs.accidentTime = 'Required';
    return errs;
  };

  const handleChange = (field) => (e) => {
    setReport((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitting(true);
    setSubmitError('');

    try {
      const payload = {
        union: prevState.union,
        unionLabel: prevState.unionLabel,
        reportedBy: prevState.profile,
        accidentReport: {
          injuredWorker: {
            firstName: report.injuredFirstName,
            lastName: report.injuredLastName,
          },
          natureOfAccident: report.natureOfAccident,
          locationOfAccident: report.locationOfAccident,
          dateOfAccident: report.accidentDate,
          timeOfAccident: report.accidentTime,
        },
        submittedAt: new Date().toISOString(),
      };

      const zip = new JSZip();
      zip.file('report.json', JSON.stringify(payload, null, 2));

      const zipBlob = await zip.generateAsync({ type: 'blob' });

      // Blob name: UNION_LastName_YYYYMMDD-HHMMSS.zip
      const ts = new Date().toISOString().replace(/:/g, '-').replace(/\..+/, '');
      const blobName = `${prevState.union}_${report.injuredLastName}_${ts}.zip`;
      // In development, route through the CRA dev proxy to avoid CORS.
      // In production, the request goes directly to Azure (requires CORS
      // configured on the storage account — see src/setupProxy.js for details).
      const uploadUrl = process.env.NODE_ENV === 'development'
        ? `/azure-upload/${blobName}?${AZURE_SAS_TOKEN}`
        : `${AZURE_STORAGE_URL}/${blobName}?${AZURE_SAS_TOKEN}`;

      const response = await fetch(uploadUrl, {
        method: 'PUT',
        headers: {
          'x-ms-blob-type': 'BlockBlob',
          'Content-Type': 'application/zip',
        },
        body: zipBlob,
      });

      if (!response.ok) {
        throw new Error(`Upload failed (${response.status} ${response.statusText})`);
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || 'Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="screen">
        <div className="card card--centered">
          <div className="success-icon">✓</div>
          <h1 className="screen-title">Report Submitted</h1>
          <p className="success-message">
            The accident report for{' '}
            <strong>
              {report.injuredFirstName} {report.injuredLastName}
            </strong>{' '}
            has been successfully submitted.
          </p>
          <button className="btn-primary" onClick={() => navigate('/', { replace: true })}>
            Submit Another Report
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="screen">
      <div className="card">
        <p className="app-title">RRT</p>
        <h1 className="screen-title">Accident Report</h1>
        <p className="screen-subtitle">{prevState.unionLabel}</p>

        <form onSubmit={handleSubmit} noValidate>
          <fieldset>
            <legend>Injured Worker</legend>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="injuredFirst">First Name</label>
                <input
                  id="injuredFirst"
                  type="text"
                  value={report.injuredFirstName}
                  onChange={handleChange('injuredFirstName')}
                />
                {errors.injuredFirstName && (
                  <span className="field-error">{errors.injuredFirstName}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="injuredLast">Last Name</label>
                <input
                  id="injuredLast"
                  type="text"
                  value={report.injuredLastName}
                  onChange={handleChange('injuredLastName')}
                />
                {errors.injuredLastName && (
                  <span className="field-error">{errors.injuredLastName}</span>
                )}
              </div>
            </div>
          </fieldset>

          <div className="form-group">
            <label htmlFor="nature">
              Nature of Accident{' '}
              <span className="char-count">{report.natureOfAccident.length}/500</span>
            </label>
            <textarea
              id="nature"
              value={report.natureOfAccident}
              onChange={handleChange('natureOfAccident')}
              maxLength={500}
              rows={4}
              placeholder="Describe the nature of the accident…"
            />
            {errors.natureOfAccident && (
              <span className="field-error">{errors.natureOfAccident}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="location">
              Location of Accident{' '}
              <span className="char-count">{report.locationOfAccident.length}/500</span>
            </label>
            <textarea
              id="location"
              value={report.locationOfAccident}
              onChange={handleChange('locationOfAccident')}
              maxLength={500}
              rows={4}
              placeholder="Describe where the accident occurred…"
            />
            {errors.locationOfAccident && (
              <span className="field-error">{errors.locationOfAccident}</span>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="accidentDate">Date of Accident</label>
              <input
                id="accidentDate"
                type="date"
                value={report.accidentDate}
                onChange={handleChange('accidentDate')}
              />
              {errors.accidentDate && (
                <span className="field-error">{errors.accidentDate}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="accidentTime">Time of Accident</label>
              <input
                id="accidentTime"
                type="time"
                value={report.accidentTime}
                onChange={handleChange('accidentTime')}
              />
              {errors.accidentTime && (
                <span className="field-error">{errors.accidentTime}</span>
              )}
            </div>
          </div>

          {submitError && <p className="error">{submitError}</p>}

          <button type="submit" className="btn-primary" disabled={submitting}>
            {submitting ? 'Submitting…' : 'Submit Report'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReportScreen;
