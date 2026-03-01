import { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[\d\s\-().]{7,}$/;

function ProfileScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const loginState = location.state;

  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});

  // Guard: must arrive here via login
  if (!loginState?.union) {
    return <Navigate to="/" replace />;
  }

  const validate = () => {
    const errs = {};
    if (!profile.firstName.trim()) errs.firstName = 'Required';
    if (!profile.lastName.trim()) errs.lastName = 'Required';
    if (!profile.email.trim()) {
      errs.email = 'Required';
    } else if (!EMAIL_RE.test(profile.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!profile.phone.trim()) {
      errs.phone = 'Required';
    } else if (!PHONE_RE.test(profile.phone)) {
      errs.phone = 'Enter a valid phone number';
    }
    return errs;
  };

  const handleChange = (field) => (e) => {
    setProfile((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    navigate('/report', { state: { ...loginState, profile } });
  };

  return (
    <div className="screen">
      <div className="card">
        <p className="app-title">Pond Lehocky</p>
        <h1 className="screen-title">Your Profile</h1>
        <p className="screen-subtitle">{loginState.unionLabel}</p>
        <form onSubmit={handleNext} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                value={profile.firstName}
                onChange={handleChange('firstName')}
                autoComplete="given-name"
              />
              {errors.firstName && <span className="field-error">{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                value={profile.lastName}
                onChange={handleChange('lastName')}
                autoComplete="family-name"
              />
              {errors.lastName && <span className="field-error">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              value={profile.email}
              onChange={handleChange('email')}
              autoComplete="email"
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              value={profile.phone}
              onChange={handleChange('phone')}
              autoComplete="tel"
            />
            {errors.phone && <span className="field-error">{errors.phone}</span>}
          </div>

          <button type="submit" className="btn-primary">
            Continue to Report
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileScreen;
