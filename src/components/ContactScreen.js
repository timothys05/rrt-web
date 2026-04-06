import { useEffect } from 'react';
import './HomepageScreen.css';
import HpNav from './HpNav';
import HpFooter from './HpFooter';

function ContactScreen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hp">
      <HpNav page />

      <div className="hp-guide-hero">
        <h1>CONTACT</h1>
      </div>

      <div className="hp-section">
        <div className="hp-section-body">

          <div className="hp-contact-cols">
            <div className="hp-contact-col">
              <h3>ADDRESS</h3>
              <p>
                Rapid Response Team<br />
                3031C Walton Rd Suite 301<br />
                Plymouth Meeting, PA 19462
              </p>
            </div>
            <div className="hp-contact-col">
              <h3>PHONE</h3>
              <p>(833) RRT-4-HELP</p>
            </div>
            <div className="hp-contact-col">
              <h3>CONTACT US</h3>
              <p>
                <a href="mailto:eric@rapidresponseteamlawyers.com">eric@rapidresponseteamlawyers.com</a>
              </p>
            </div>
          </div>

          <form className="hp-contact-form" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" className="hp-full-width" />
            <textarea placeholder="Message" className="hp-full-width"></textarea>
            <button type="submit" className="hp-contact-submit">Submit</button>
          </form>

        </div>
      </div>

      <HpFooter />
    </div>
  );
}

export default ContactScreen;
