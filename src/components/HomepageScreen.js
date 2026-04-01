import './HomepageScreen.css';
import HpNav from './HpNav';
import HpFooter from './HpFooter';

function HomepageScreen() {
  return (
    <div className="hp">

      {/* ===================== HERO ===================== */}
      <section className="hp-hero" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/tl237background.png)` }}>
        <div className="hp-hero-overlay"></div>
        <HpNav />
        <div className="hp-hero-content">
          <div className="hp-hero-left">
            <h1>GET THE RRT APP FOR IPHONE &amp; ANDROID</h1>
            <p>Download the Rapid Response Team exclusively made for Teamsters Local 237 to get help when injured on the job.</p>
            <div className="hp-hero-buttons">
              <div className="hp-hero-btns-row">
                <a href="#" className="hp-btn hp-btn-store">Download on App Store</a>
                <a href="#" className="hp-btn hp-btn-store">Download on Google Play</a>
              </div>
              <a href="/profile" className="hp-btn hp-btn-report">Submit a Report</a>
            </div>
          </div>
          <div className="hp-hero-right">
            <img src="/phoneimagehome.png" alt="RRT App" className="hp-phone-image" />
          </div>
        </div>
      </section>

      {/* ===================== WHAT IS RRT ===================== */}
      <section id="what-is-rrt" className="hp-section">
        <div className="hp-section-header">
          <h2>WHAT IS THE RAPID RESPONSE TEAM?</h2>
        </div>
        <div className="hp-section-body hp-section-body--narrow">
          <p>
            The Rapid Response Team (RRT) is a service designed by Teamsters Local 237. It is a free legal and
            investigative service offered to our members. This program is dedicated to protecting the rights of
            union members and their families after suffering from serious work-related injuries or mesothelioma.
          </p>
          <p>
            Teamsters Local 237 understands that being grievously injured in an accident, or being diagnosed with
            mesothelioma, is a financial life changer for union workers and their families. Besides the basic costs
            of emergency medical care, surgery, and rehabilitation, there is also the possibility of suffering from
            a loss of income and benefits.
          </p>
          <blockquote className="hp-quote">
            "The Rapid Response Team (RRT) will provide additional resources for our members and their families in
            the event of unfortunate work-related injuries."
          </blockquote>
          <p className="hp-attribution">
            Gregory Floyd<br />
            President<br />
            Teamsters Local 237
          </p>
          <div className="hp-union-seal">
            <img src="/tl237rrtlogo.png" alt="Teamsters Local 237 Seal" />
          </div>
        </div>
      </section>

      {/* ===================== THE RRT PROCESS ===================== */}
      <section id="the-rrt-process" className="hp-section">
        <div className="hp-section-header">
          <h2>THE RRT PROCESS</h2>
        </div>
        <div className="hp-section-body">
          <p>
            When you or a loved one is involved in an accident, the aftermath can be overwhelming and chaotic.
            Amidst the physical pain, emotional distress, and confusion, it's essential to remember that gathering
            evidence is crucial to building a strong personal injury claim. Whether it's a workplace injury, auto
            accident, or slip and fall incident, the evidence you collect can significantly impact the outcome of
            your case.
          </p>
          <p>
            Teamsters Local 237 engaged the Rapid Response Team to assist with post-accident critical steps because
            we understand the importance of preserving evidence and providing other assistance and resources because
            it can make or break any subsequent claims for personal injuries.
          </p>

          <div className="hp-process-grid">

            {/* ESTABLISHING LIABILITY */}
            <div className="hp-process-item">
              <div className="hp-process-icon">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="2" x2="12" y2="22"/>
                  <line x1="8" y1="22" x2="16" y2="22"/>
                  <line x1="2" y1="6" x2="22" y2="6"/>
                  <path d="M2 6v6a4 4 0 0 0 8 0V6"/>
                  <path d="M14 6v6a4 4 0 0 0 8 0V6"/>
                </svg>
              </div>
              <div className="hp-process-text">
                <h3>ESTABLISHING LIABILITY</h3>
                <p>
                  Establishing liability in a workplace accident or other personal injury case is crucial as it
                  determines who is responsible for the accident and, consequently, who should be held accountable
                  for the injuries and damages suffered by the victim(s). Proving liability is essential to ensuring
                  that the at-fault party takes responsibility for their actions, and it forms the basis for seeking
                  compensation for the victim's losses.
                </p>
                <p>
                  To establish liability in a workplace accident or personal injury case, several key steps can be
                  taken. First, gathering evidence from the accident scene is essential. This may include photographs
                  of the scene, property damage, and any hazardous conditions that contributed to the incident.
                  Eyewitness testimonies and surveillance footage, if available, can also provide valuable insights
                  into what happened.
                </p>
                <p>
                  Next, it is essential to preserve any physical evidence related to the accident. This may involve
                  maintaining damaged property, preserving vehicle components, or securing equipment involved in a
                  workplace accident. Physical evidence can serve as tangible proof of how the accident occurred and
                  who may have been at fault.
                </p>
                <p>
                  Another crucial aspect of establishing liability is determining whether any parties involved acted
                  negligently or recklessly. Negligence occurs when a person fails to exercise reasonable care,
                  leading to harm to others. To prove negligence, it must be shown that the at-fault party had a
                  duty of care to the victim, breached that duty, and caused the injuries as a result.
                </p>
                <p>
                  Witness statements and expert testimony can also play a significant role in establishing liability.
                  Eyewitnesses who saw the accident happen can provide firsthand accounts of what occurred, while
                  expert witnesses, such as accident reconstruction specialists or medical professionals, can offer
                  objective analyses of the incident and its consequences.
                </p>
              </div>
            </div>

            {/* DOCUMENTING INJURIES */}
            <div className="hp-process-item">
              <div className="hp-process-icon">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="8" y="2" width="8" height="4" rx="1"/>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                  <line x1="12" y1="11" x2="12" y2="17"/>
                  <line x1="9" y1="14" x2="15" y2="14"/>
                </svg>
              </div>
              <div className="hp-process-text">
                <h3>DOCUMENTING INJURIES AND MEDICAL TREATMENT</h3>
                <p>
                  Documenting injuries and medical treatment in a personal injury case is crucial for several
                  significant reasons. Firstly, it provides a detailed and comprehensive record of the extent of the
                  injuries sustained due to the accident. Seeking immediate medical attention after an accident is
                  not only essential for your health and well-being but also for building a strong case. Medical
                  records, diagnostic tests, and treatment plans serve as concrete evidence of the injuries
                  sustained, ensuring that no crucial detail is overlooked.
                </p>
                <p>
                  Secondly, documenting injuries and medical treatment is vital for establishing a direct link
                  between the accident and the injuries. Insurance companies and opposing parties may attempt to
                  downplay the severity of injuries or argue that they were pre-existing conditions. By documenting
                  injuries and the medical care received after the accident, victims can clearly demonstrate that the
                  injuries were a direct result of the incident in question.
                </p>
                <p>
                  Thirdly, well-documented injuries and medical treatment help calculate the full extent of damages
                  incurred. In workplace injury and other personal injury cases, victims are entitled to compensation
                  for medical expenses, both current and future. Detailed medical records aid in accurately assessing
                  the costs of medical treatment, rehabilitation, and ongoing care, ensuring that victims receive the
                  compensation they rightfully deserve.
                </p>
              </div>
            </div>

            {/* PRESERVING EVIDENCE */}
            <div className="hp-process-item">
              <div className="hp-process-icon">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
              </div>
              <div className="hp-process-text">
                <h3>PRESERVING ACCIDENT SCENE EVIDENCE</h3>
                <p>
                  Preserving accident scene evidence is of utmost importance in workplace accident and other personal
                  injury cases, as it plays a significant role in determining liability and establishing the facts
                  surrounding the incident. One of the primary reasons to preserve accident scene evidence is to
                  accurately establish who was at fault for the accident. Evidence such as broken mechanical
                  equipment, work area configurations, working conditions, or property damage can provide vital clues
                  for investigators and legal professionals to reconstruct the events leading up to the accident.
                </p>
                <p>
                  Additionally, accident scene evidence prevents alterations and maintains the integrity of the
                  scene. Accident scenes are dynamic, and evidence can quickly disappear or be altered after an
                  incident. By preserving evidence through photographs, video recordings, and detailed notes, the
                  authenticity of the accident scene is maintained, allowing for a more accurate and thorough
                  investigation.
                </p>
                <p>
                  Preserved accident scene evidence also serves as critical documentation in workplace accident and
                  other personal injury claims. Insurance companies, courts, and legal teams rely on this evidence
                  to validate the extent of injuries and damages. Well-preserved evidence can support the victim's
                  version of events, making their case stronger and more compelling during negotiations and legal
                  proceedings.
                </p>
              </div>
            </div>

            {/* ENSURING TIMELY ACTION */}
            <div className="hp-process-item">
              <div className="hp-process-icon">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"/>
                  <polyline points="12,7 12,12 15,15"/>
                </svg>
              </div>
              <div className="hp-process-text">
                <h3>ENSURING TIMELY ACTION</h3>
                <p>
                  Ensuring timely action in a workplace accident or other personal injury case is of utmost
                  importance for several crucial reasons. Meeting the statutes of limitations is vital. Every state
                  has a statute of limitations, which is the legal timeframe within which a person must file a
                  personal injury claim. If the statute of limitations expires, you may lose your right to seek
                  compensation for your injuries and damages. Failing to initiate legal action in a timely manner
                  can severely impact your ability to pursue a claim, even if you have a strong case.
                </p>
                <p>
                  Furthermore, delays in pursuing a personal injury claim may lead to disputes regarding causation,
                  liability, and damages. Insurance companies may question the severity of your injuries or argue
                  that your injuries were not caused by the accident in question. By taking timely action, you can
                  proactively address potential disputes and avoid unnecessary delays in the claims process.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== CALL BANNER ===================== */}
      <div className="hp-call-banner">
        <h2>Need To Talk To Someone?</h2>
        <p>CALL US ANYTIME AT (833) RRT-4-HELP</p>
      </div>

      {/* ===================== NEWSLETTER ===================== */}
      <div className="hp-newsletter">
        <h2>SUBSCRIBE TO NEWSLETTER</h2>
        <div className="hp-newsletter-form">
          <input type="email" placeholder="Enter your email address" />
          <button type="button">Sign Up</button>
        </div>
      </div>

      <HpFooter />

    </div>
  );
}

export default HomepageScreen;
