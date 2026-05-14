import { useEffect } from 'react';
import './HomepageScreen.css';
import HpNav from './HpNav';
import HpFooter from './HpFooter';

function TermsScreen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hp">
      <HpNav page />

      <div className="hp-guide-hero">
        <h1>TERMS AND CONDITIONS</h1>
      </div>

      <div className="hp-section" style={{ background: 'white' }}>
        <div className="hp-section-body">
          <div className="hp-guide-subsection">
            <p><em>Last updated: May 14, 2026</em></p>

            <h3>1. Service Description</h3>
            <p>
              The Rapid Response Team (RRT) platform is operated by Young Law Group and provides workplace
              accident reporting services to union members. By using the RRT mobile app or website, you agree
              to these Terms and Conditions.
            </p>

            <h3>2. SMS Messaging</h3>
            <p>
              By opting in to SMS notifications within the RRT app, you consent to receive text message
              updates regarding your submitted accident report. Message frequency varies. Message and data
              rates may apply. To opt out at any time, reply STOP to any message. To request help, reply
              HELP or contact us at 833-778-4435.
            </p>

            <h3>3. Use of the Service</h3>
            <p>
              The RRT platform is intended solely for reporting workplace accidents. You agree to provide
              accurate information when submitting a report. Misuse of the platform is prohibited.
            </p>

            <h3>4. Privacy</h3>
            <p>
              Your personal information is handled in accordance with our{' '}
              <a href="/privacy-policy">Privacy Policy</a> at{' '}
              <a href="https://tl237rrt.com/privacy-policy" target="_blank" rel="noreferrer">
                https://tl237rrt.com/privacy-policy
              </a>
              .
            </p>

            <h3>5. Contact</h3>
            <p>
              For questions, contact us at 833-778-4435 or visit{' '}
              <a href="https://tl237rrt.com" target="_blank" rel="noreferrer">tl237rrt.com</a>.
            </p>
          </div>
        </div>
      </div>

      <HpFooter />
    </div>
  );
}

export default TermsScreen;
