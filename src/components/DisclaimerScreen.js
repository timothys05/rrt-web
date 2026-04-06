import { useEffect } from 'react';
import './HomepageScreen.css';
import HpNav from './HpNav';
import HpFooter from './HpFooter';

function DisclaimerScreen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hp">
      <HpNav page />

      <div className="hp-guide-hero">
        <h1>DISCLAIMER</h1>
      </div>

      <div className="hp-section" style={{ background: 'white' }}>
        <div className="hp-section-body">
          <div className="hp-guide-subsection">
            <p>
              Young Law Group, P.C. ("YLG") is a law firm based in Plymouth Meeting, PA comprised of lawyers
              licensed to practice law in Pennsylvania and New Jersey. After years of representing labor unions,
              workers, and whistleblowers in litigation throughout the United States, YLG developed the Rapid
              Response Team ("RRT") as a resource for labor unions and their members to assist in rapidly
              responding to workplace accidents. The RRT provides legal advice and investigative services to
              affiliate labor unions and their members relating to potential claims for workers' compensation
              and personal injuries. Communications and information exchanged between YLG, RRT labor union
              affiliates, or any workers are treated with the utmost confidentiality and in accordance with
              applicable legal and ethical standards. However, it is important to note that neither the
              information on this website nor initial communications between YLG, labor union affiliates, or
              any workers establish an attorney-client relationship. To establish such a relationship, a formal
              retainer agreement outlining the terms of representation must be entered into with either YLG or
              another law firm selected by an injured worker. In cases where an injured worker retains YLG, YLG
              strives to provide the highest quality legal services, the firm cannot guarantee any specific
              outcomes in any legal matter. The results of each case depend on numerous factors, including, but
              not limited to the specific facts of the incident in question, evidence, and applicable laws. The
              information on this website is solely intended for general informational purposes and should not
              be construed as legal advice. YLG does not seek to represent anyone based on their viewing of
              this website in a jurisdiction where this website does not conform to local requirements. This
              website should not be construed as an offer to perform legal services in any jurisdiction in
              which YLG's attorneys are not licensed to practice law. YLG's website outlines the jurisdictions
              in which each of our lawyers are licensed to practice law. YLG reserves the right to modify and
              update the terms of this disclaimer at any time without prior notice.
            </p>
          </div>
        </div>
      </div>

      <HpFooter />
    </div>
  );
}

export default DisclaimerScreen;
