import { useEffect } from 'react';
import './HomepageScreen.css';
import HpNav from './HpNav';
import HpFooter from './HpFooter';

function PrivacyPolicyScreen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hp">
      <HpNav page />

      <div className="hp-guide-hero">
        <h1>PRIVACY POLICY</h1>
      </div>

      <div className="hp-section" style={{ background: 'white' }}>
        <div className="hp-section-body">
          <div className="hp-guide-subsection">
            <p>
              This Privacy Policy describes our policies and procedures for the collection, use and disclosure
              of your information. Some visitors to our website interact in a way that results in gathering
              certain personally identifiable information. The amount and type of information depends on the
              nature of the interaction. We only collect information that is necessary or appropriate for your
              interaction with our site or that allows us to contact you after you submit an inquiry. We do not
              share or sell your information with anyone.
            </p>
            <p>
              We collect certain information directly from users, web server logs and cookies. This Privacy
              Policy explains what information is collected and how it is collected for each of these sources.
            </p>
            <p>
              The contact form on this website requests basic personal information including your name, e-mail
              address and phone number. We use this information to respond to your inquiry by contacting you
              through email, telephone, SMS, or other equivalent forms of electronic communication.
            </p>
            <p>
              Depending on your browser settings, we may track certain usage data when you visit our website
              and retain that data in our web server logs. Such data can include your internet protocol
              address; the name of your internet service provider; your browser type and version; the date and
              time of your visit; and the pages of our site that you viewed. This information helps us
              understand how users access and interact with our site so that we can make improvements. The
              information also helps to protect our site from improper or inappropriate use. None of the
              information maintained on our web server logs can reveal your personal identity.
            </p>
            <p>
              Our website also uses cookies and similar technologies to store certain non-personally
              identifiable information. A cookie is a small file sent from a web server that is stored on your
              device. Cookies are necessary to provide you with services available through our website and to
              enable you to use some of its features. Cookies also help to authenticate users and prevent
              fraudulent use of user accounts. You can change your browser setting to refuse all cookies or to
              notify you when a cookie is being sent. Unless you have adjusted your browser setting to refuse
              all cookies, our website may use cookies.
            </p>
            <p>
              Many of the links on our website are to external content maintained by third parties that we do
              not control. These third parties may collect certain usage data sent by your browser as part of a
              web page request, such as your IP address or cookies. We are not responsible for the privacy
              practices of these third parties and their information practices are not covered by this Privacy
              Policy.
            </p>
            <p>
              We use third party providers for services such as website hosting and maintenance; upgrades; new
              releases; and analytic data review. As part of these services, we are sometimes required to share
              user data with these providers. These third parties only collect aggregated data that does not
              contain personally identifiable information, and they are not authorized to use or disclose any
              of this data for any other purpose.
            </p>
            <p>
              We may update our Privacy Policy from time to time. Any changes will be posted on this page.
            </p>
            <p>
              If you have any questions about this Privacy Policy, you can contact us: By email:{' '}
              <a href="mailto:eric@rapidresponseteamlawyers.com">eric@rapidresponseteamlawyers.com</a> By
              phone: 1-800-590-4116
            </p>
          </div>
        </div>
      </div>

      <HpFooter />
    </div>
  );
}

export default PrivacyPolicyScreen;
