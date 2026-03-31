import React from 'react';
import './HomepageScreen.css';

function HomepageScreen() {
  return (
    <div className="hp">

      {/* ===================== HERO ===================== */}
      <section className="hp-hero" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/tl237background.png)` }}>
        <div className="hp-hero-overlay"></div>
        <nav className="hp-nav">
          <img src="/IBT logo color.jpg" alt="Teamsters Local 237" className="hp-nav-logo" />
          <div className="hp-nav-links">
            <a href="#what-is-rrt">WHAT IS RRT?</a>
            <a href="#the-rrt-process">THE RRT PROCESS</a>
            <a href="#the-guide">THE GUIDE</a>
            <a href="#contact">CONTACT</a>
          </div>
        </nav>
        <div className="hp-hero-content">
          <div className="hp-hero-left">
            <h1>GET THE RRT APP FOR IPHONE &amp; ANDROID</h1>
            <p>Download the Rapid Response Team exclusively made for Teamsters Local 237 to get help when injured on the job.</p>
            <div className="hp-hero-buttons">
              <a href="#" className="hp-btn hp-btn-dark">Download on App Store</a>
              <a href="#" className="hp-btn hp-btn-light">Download on Google Play</a>
            </div>
          </div>
          <div className="hp-hero-right">
            <div className="hp-phone-mockup"></div>
          </div>
        </div>
      </section>

      {/* ===================== WHAT IS RRT ===================== */}
      <section id="what-is-rrt" className="hp-section">
        <div className="hp-section-header">
          <h2>WHAT IS THE RAPID RESPONSE TEAM?</h2>
        </div>
        <div className="hp-section-body">
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
            <img src="/IBT logo color.jpg" alt="Teamsters Local 237 Seal" />
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

            <div className="hp-process-item">
              <div className="hp-process-icon"></div>
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

            <div className="hp-process-item">
              <div className="hp-process-icon"></div>
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

            <div className="hp-process-item">
              <div className="hp-process-icon"></div>
              <h3>PRESERVING ACCIDENT SCENE EVIDENCE</h3>
              <p>
                Preserving accident scene evidence is of utmost importance in workplace accident and other personal
                injury cases, as it plays a significant role in determining liability and establishing the facts
                surrounding the incident. One of the primary reasons to preserve accident scene evidence is to
                accurately establish who was at fault for the accident. Evidence such as broken mechanical
                equipment, work area configurations, working conditions, or property damage can provide vital clues
                for investigators and legal professionals to reconstruct the events leading up to the accident.
                This accurate determination of liability is essential for holding the responsible party accountable
                for their actions.
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

            <div className="hp-process-item">
              <div className="hp-process-icon"></div>
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
      </section>

      {/* ===================== THE GUIDE ===================== */}
      <section id="the-guide" className="hp-section">
        <div className="hp-section-header">
          <h2>THE GUIDE</h2>
        </div>
        <div className="hp-section-body">

          {/* Subtitle */}
          <div className="hp-guide-subsection">
            <h3>RAPID RESPONSE TEAM GUIDE</h3>
          </div>

          {/* IF YOU'RE INJURED */}
          <div className="hp-guide-subsection">
            <h3>IF YOU'RE INJURED</h3>
            <p>Steps to take if you're injured at work:</p>
            <ol className="hp-steps">
              <li>
                <span className="hp-step-icon">→</span>
                <div>
                  <strong>SEEK PROPER MEDICAL ATTENTION</strong> — Call 911 if needed.
                </div>
              </li>
              <li>
                <span className="hp-step-icon">→</span>
                <div>
                  <strong>CALL THE RAPID RESPONSE TEAM AT (833) RRT-4-HELP</strong> — The scene of the accident
                  will not be tampered with while you are receiving medical attention. The RRT will immediately send
                  investigators to the scene of the accident to collect evidence. (i.e. photos, video, statements
                  from witnesses.)
                </div>
              </li>
              <li>
                <span className="hp-step-icon">→</span>
                <div>
                  <strong>DON'T BE FORCED INTO SIGNING ANY STATEMENT OR INCIDENT REPORT</strong> — This is
                  especially true if you are under the influence of pain medication or narcotics.
                </div>
              </li>
              <li>
                <span className="hp-step-icon">→</span>
                <div>
                  <strong>BE AWARE OF WITNESSES</strong> — Ask any witnesses to your accident to give you a
                  statement.
                </div>
              </li>
              <li>
                <span className="hp-step-icon">→</span>
                <div>
                  <strong>TAKE PICTURES</strong> — Photograph any paperwork from the accident that can help your
                  case.
                </div>
              </li>
            </ol>
          </div>

          {/* POSSIBLE ACCIDENT INVESTIGATION QUESTIONS */}
          <div className="hp-guide-subsection">
            <h3>POSSIBLE ACCIDENT INVESTIGATION QUESTIONS</h3>
            <p>
              Some of the questions below will be applicable and some will not. Which questions are applicable
              depends on the nature and circumstances of the accident.
            </p>
            <div className="hp-investigation-grid">
              <div className="hp-investigation-group">
                <div className="hp-investigation-icon">HOW</div>
                <ul>
                  <li>How does the injured employee feel now?</li>
                  <li>How did the injury occur?</li>
                  <li>How could this accident have been prevented?</li>
                </ul>
              </div>
              <div className="hp-investigation-group">
                <div className="hp-investigation-icon">WHO</div>
                <ul>
                  <li>Who was injured?</li>
                  <li>Who saw the accident?</li>
                  <li>Who was working with the injured person?</li>
                  <li>Who had assigned the person to the task?</li>
                  <li>Who had trained the person on the hazards and protective measures for this task?</li>
                  <li>Who else was involved?</li>
                </ul>
              </div>
              <div className="hp-investigation-group">
                <div className="hp-investigation-icon">WHEN</div>
                <ul>
                  <li>When did the accident occur?</li>
                  <li>When did the person start this task?</li>
                  <li>When had the supervisor last checked on the job?</li>
                </ul>
              </div>
              <div className="hp-investigation-group">
                <div className="hp-investigation-icon">WHERE</div>
                <ul>
                  <li>Where did the accident occur?</li>
                  <li>Where was the person at the time of the accident?</li>
                  <li>Where was the supervisor at the time?</li>
                  <li>Where were fellow workers at the time?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ENSURING TIMELY ACTION */}
          <div className="hp-guide-subsection">
            <h3>ENSURING TIMELY ACTION</h3>
            <p>
              Ensuring timely action following a workplace accident or other personal injury case is of utmost
              importance for several crucial reasons. Meeting the statute(s) of limitations is vital. Every claim
              has a statute of limitations, which is the legal time frame within which a person must file. If the
              statute of limitations expires, you may lose your right to seek compensation for your injuries and
              damages. Failing to initiate legal action in a timely manner can severely limit, or even eliminate,
              your ability to pursue a claim, even if you have a strong case otherwise.
            </p>
            <p>
              Further, delays in pursuing a personal injury claim may lead to disputes regarding causation,
              liability, and damages. Insurance companies may question the severity of your injuries or argue that
              your injuries were not caused by the accident in question. By taking timely action, you can
              proactively address potential disputes and avoid unnecessary delays in the claims process.
            </p>
          </div>

          {/* DOCUMENTING INJURIES */}
          <div className="hp-guide-subsection">
            <h3>DOCUMENTING INJURIES AND MEDICAL TREATMENT</h3>
            <p>
              Documenting injuries and medical treatment in a personal injury case is crucial for several reasons.
              First, it provides a detailed record of the injuries sustained. Immediate medical attention after an
              accident is essential for your health and for building a strong case. Medical records, diagnostic
              tests, and treatment plans serve as concrete evidence of the injuries. Providing these materials to
              your attorneys ensures no crucial detail is overlooked.
            </p>
            <p>
              Second, documenting injuries and medical treatment establishes that the injuries resulted from the
              accident. Insurance companies and opposing parties may argue that injuries were pre-existing or less
              severe. By documenting injuries and care received after the accident, victims can clearly show the
              injuries were a direct result of the incident.
            </p>
            <p>
              Third, proper documentation helps calculate the full extent of damages. In workplace injury and other
              personal injury cases, victims are entitled to compensation for medical expenses, both current and
              future. Detailed medical records help accurately assess these costs, ensuring victims receive the
              compensation they deserve.
            </p>
          </div>

          {/* PRESERVING ACCIDENT SCENE EVIDENCE */}
          <div className="hp-guide-subsection">
            <h3>PRESERVING ACCIDENT SCENE EVIDENCE</h3>
            <p>
              Preserving evidence of the accident scene is crucial in workplace and personal injury cases, as it
              helps determine liability and establish facts. Accurate evidence such as broken equipment, work area
              layouts, conditions, or property damage provides vital clues for investigators reconstructing events.
              This determination of liability is essential for holding the responsible party accountable.
            </p>
            <p>
              Additionally, preserved evidence allows investigators to observe the scene as it was during the
              accident. Because accident scenes can change, evidence can quickly disappear or be altered. By
              preserving evidence through photographs, video recordings, and detailed notes, details about the
              accident scene are maintained, allowing for a more accurate and thorough investigation.
            </p>
            <p>
              Preserved accident scene evidence also serves as critical documentation in claims. Insurance
              companies, courts, and legal teams rely on this evidence to validate injuries and damages.
              Well-preserved evidence supports the victim's version of events, making their case stronger during
              negotiations and legal proceedings.
            </p>
          </div>

          {/* HOW TO PHOTOGRAPH */}
          <div className="hp-guide-subsection">
            <h3>HOW TO PHOTOGRAPH THE ACCIDENT SCENE</h3>
            <ol className="hp-steps">
              <li>
                <span className="hp-step-icon">→</span>
                <div><strong>ENSURE SAFETY FIRST</strong> — Address any immediate dangers and medical needs.</div>
              </li>
              <li>
                <span className="hp-step-icon">→</span>
                <div><strong>ACT QUICKLY</strong> — Photograph the scene promptly before any changes.</div>
              </li>
              <li>
                <span className="hp-step-icon">→</span>
                <div><strong>CAPTURE VARIOUS ANGLES</strong> — Take wide shots for context and close-ups for details.</div>
              </li>
              <li>
                <span className="hp-step-icon">→</span>
                <div>
                  <strong>CAPTURE MACHINERY DETAILS</strong> — If a machine was involved, take pictures of the
                  machine from multiple angles.
                </div>
              </li>
              <li>
                <span className="hp-step-icon">→</span>
                <div>
                  <strong>DOCUMENT CONDITIONS</strong> — Show environmental factors, safety violations, and
                  signage.
                </div>
              </li>
              <li>
                <span className="hp-step-icon">→</span>
                <div>
                  <strong>SCALE AND NOTES</strong> — Include objects for scale in injury photos and take detailed
                  notes on each photo.
                </div>
              </li>
              <li>
                <span className="hp-step-icon">→</span>
                <div><strong>PRESERVE ORIGINALS</strong> — Keep unedited originals and back them up securely.</div>
              </li>
              <li>
                <span className="hp-step-icon">→</span>
                <div><strong>RESPECT PRIVACY</strong> — Obtain consent when photographing individuals.</div>
              </li>
            </ol>
          </div>

          {/* GENERAL FIRST AID */}
          <div className="hp-guide-subsection">
            <h3>GENERAL FIRST AID PROCEDURES</h3>
            <p>
              This manual serves as a guide for responding to various first aid emergencies within the workplace.
              Its purpose is to provide employees with the knowledge and steps necessary to assist coworkers in
              need, reduce the severity of injuries or illnesses, and potentially save lives in critical situations.
            </p>
            <ol className="hp-steps">
              <li>
                <span className="hp-step-icon">→</span>
                <div>
                  <strong>ASSESS THE SITUATION</strong> — Quickly evaluate the scene for safety. Ensure the area
                  is safe for you, the victim, and others before providing assistance.
                </div>
              </li>
              <li>
                <span className="hp-step-icon">→</span>
                <div>
                  <strong>CALL FOR HELP</strong> — If the situation appears serious, call emergency services
                  immediately. Provide them with precise information about the location and nature of the emergency.
                </div>
              </li>
              <li>
                <span className="hp-step-icon">→</span>
                <div>
                  <strong>CONSENT</strong> — Before administering first aid, gain consent from the conscious
                  victim. If the victim is unconscious, consent is implied.
                </div>
              </li>
              <li>
                <span className="hp-step-icon">→</span>
                <div>
                  <strong>USE PERSONAL PROTECTIVE EQUIPMENT (PPE)</strong> — Always use gloves and other PPE to
                  protect yourself from blood-borne pathogens.
                </div>
              </li>
              <li>
                <span className="hp-step-icon">→</span>
                <div>
                  <strong>FOLLOW THE ABCS OF FIRST AID</strong> — Airway, Breathing, Circulation. Ensure the
                  victim has an open airway, is breathing, and has a pulse. If necessary, perform CPR.
                </div>
              </li>
            </ol>
          </div>

          {/* SPECIFIC FIRST AID EMERGENCIES */}
          <div className="hp-guide-subsection">
            <h3>SPECIFIC FIRST AID EMERGENCIES</h3>
            <p>
              Before initiating any first aid to control bleeding, put on gloves to avoid contact between victim's
              blood and your skin.
            </p>

            {/* BLEEDING */}
            <div className="hp-first-aid-item">
              <div className="hp-fa-icon"></div>
              <div className="hp-first-aid-content">
                <h4>BLEEDING</h4>
                <ul>
                  <li>
                    <strong>STOP BLEEDING:</strong> Press firmly over the wound with a cloth; don't remove if
                    soaked, just add more.
                  </li>
                  <li>
                    <strong>ELEVATE AND CLEAN:</strong> Raise the injury higher than the heart, clean with water,
                    avoid harsh chemicals, and cover with a sterile dressing.
                  </li>
                  <li>
                    <strong>PRESSURE AND SHOCK:</strong> Use a pressure bandage for ongoing bleeding, monitor for
                    shock by keeping the person warm and elevated.
                  </li>
                  <li>
                    <strong>PROFESSIONAL HELP:</strong> Seek immediate medical attention for severe cases. Quick,
                    correct first aid can significantly aid recovery.
                  </li>
                </ul>
              </div>
            </div>

            {/* STROKE */}
            <div className="hp-first-aid-item">
              <div className="hp-fa-icon"></div>
              <div className="hp-first-aid-content">
                <h4>STROKE</h4>
                <p>If you suspect a stroke, act quickly and remember FAST to assess and respond:</p>
                <ul>
                  <li>
                    <strong>FACE:</strong> Ask the person to smile. Check if one side of the face droops.
                  </li>
                  <li>
                    <strong>ARMS:</strong> Ask the person to raise both arms. See if one arm drifts downward.
                  </li>
                  <li>
                    <strong>SPEECH:</strong> Ask the person to repeat a simple sentence. Listen for slurred or
                    strange speech.
                  </li>
                  <li>
                    <strong>TIME:</strong> If you observe any of these signs, time is absolutely critical. Call
                    emergency services immediately, even if the symptoms seem to fluctuate or even disappear.
                  </li>
                </ul>
                <p>
                  During emergencies, keep the person comfortable and calm. Avoid giving any food or drink so as
                  to prevent choking. Monitor breathing and be prepared to administer CPR if trained to do so.
                  Quick response is key in stroke cases to reduce any negative long-term effects.
                </p>
              </div>
            </div>

            {/* CHOKING */}
            <div className="hp-first-aid-item">
              <div className="hp-fa-icon"></div>
              <div className="hp-first-aid-content">
                <h4>CHOKING</h4>
                <ul>
                  <li>
                    <strong>SIGNS OF CHOKING:</strong> The person is clutching at their throat, unable to breathe
                    or talk, or skin, lips, and nails are turning blue.
                  </li>
                  <li>
                    <strong>THE HEIMLICH MANEUVER:</strong>
                    <ul>
                      <li>
                        <strong>Position Yourself:</strong> Stand behind the person choking, slightly to one side.
                        Ensure they are upright and positioned securely.
                      </li>
                      <li>
                        <strong>Wrap Your Arms:</strong> Put your arms securely around their waist, under their
                        arms, and gently bend them forward.
                      </li>
                      <li>
                        <strong>Make a Fist:</strong> Form a fist with one hand just above their navel.
                      </li>
                      <li>
                        <strong>Grasp the Fist:</strong> Hold your fist with the other hand firmly but gently.
                      </li>
                      <li>
                        <strong>Perform Abdominal Thrusts:</strong> Thrust sharply upwards into their abdomen to
                        dislodge the obstruction.
                      </li>
                      <li>
                        <strong>Repeat as Necessary:</strong> Continue thrusts until the object is expelled or
                        they breathe/cough forcefully.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* CPR */}
            <div className="hp-first-aid-item">
              <div className="hp-fa-icon"></div>
              <div className="hp-first-aid-content">
                <h4>CPR</h4>
                <p>
                  CPR, or cardiopulmonary resuscitation can help save a life during cardiac arrest, when the heart
                  stops beating or beats too ineffectively to circulate blood to the brain and other vital organs.
                  However, even after training, remembering the CPR steps and administering them correctly can be
                  a challenge.
                </p>
                <ol>
                  <li>
                    Check the scene for safety, form an initial impression and use personal protective equipment
                    (PPE).
                  </li>
                  <li>
                    If the person appears unresponsive, CHECK for responsiveness, breathing, life-threatening
                    bleeding or other life-threatening conditions using shout-tap-shout.
                  </li>
                  <li>
                    If the person does not respond and is not breathing or only gasping, CALL 9-1-1 and get
                    equipment, or tell someone to do so.
                  </li>
                  <li>Kneel beside the person. Place the person on their back on a firm, flat surface.</li>
                  <li>
                    Give 30 chest compressions. Hand position: Two hands centered on the chest. Body position:
                    Shoulders directly over hands; elbows locked. Depth: At least 2 inches. Rate: 100 to 120 per
                    minute. Allow chest to return to normal position after each compression.
                  </li>
                  <li>
                    Give 2 breaths. Open the airway to a past-neutral position using the head-tilt/chin-lift
                    technique. Pinch the nose shut, take a normal breath, and completely seal your mouth over the
                    person's mouth. Ensure each breath lasts about 1 second and makes the chest rise; let the air
                    exit before giving the next breath. If the first breath doesn't make the chest rise, re-tilt
                    the head and ensure a proper seal before giving the second breath. If the second breath fails,
                    an object may be blocking the airway.
                  </li>
                  <li>
                    Give 30 chest compressions followed by 2 breaths. Use an AED as soon as available! Keep
                    interruptions to compressions under 10 seconds.
                  </li>
                </ol>
              </div>
            </div>

            {/* SPINAL INJURIES */}
            <div className="hp-first-aid-item">
              <div className="hp-fa-icon"></div>
              <div className="hp-first-aid-content">
                <h4>SPINAL INJURIES</h4>
                <p>Assume one has a spinal injury if any of the following are true:</p>
                <ul>
                  <li>
                    There's evidence of a head injury with an ongoing change in the person's level of consciousness.
                  </li>
                  <li>The person complains of severe pain in his or her neck or back.</li>
                  <li>An injury has exerted substantial force on the back or head.</li>
                  <li>
                    The person complains of weakness, numbness, or paralysis or lacks control of his or her limbs,
                    bladder or bowels.
                  </li>
                  <li>The neck or body is twisted or positioned oddly or awkwardly.</li>
                </ul>
                <ol>
                  <li>Get help by calling 911 or emergency services.</li>
                  <li>Keep the person still using heavy towels on both sides of the neck.</li>
                  <li>
                    Avoid moving the head or neck. Provide first aid without moving the head or neck. If no signs
                    of circulation, start CPR without tilting the head back.
                  </li>
                  <li>If the person is wearing a helmet or hardhat, keep it on.</li>
                  <li>
                    Don't roll the person alone. If you must roll the person because they are vomiting, choking on
                    blood, or you need to check their breathing, get someone to help. One person at the head and
                    another at the side should roll the person onto their side, keeping their head, neck, and back
                    aligned.
                  </li>
                </ol>
              </div>
            </div>

            {/* HEART ATTACK */}
            <div className="hp-first-aid-item">
              <div className="hp-fa-icon"></div>
              <div className="hp-first-aid-content">
                <h4>HEART ATTACK</h4>
                <ul>
                  <li>
                    Call 911 immediately for help. If you can't get an ambulance, have someone drive you quickly
                    to the nearest hospital.
                  </li>
                  <li>
                    Take aspirin if medically advised. It will help prevent blood clotting and may significantly
                    reduce serious heart damage.
                  </li>
                  <li>Use nitroglycerin if prescribed while waiting for medical help.</li>
                  <li>
                    Begin CPR if no pulse or breathing. If untrained, do hands-only CPR. Use an AED if available
                    and the person is unconscious. It provides step-by-step voice instructions and delivers shocks
                    when needed.
                  </li>
                </ul>
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

      {/* ===================== CONTACT ===================== */}
      <section id="contact" className="hp-section">
        <div className="hp-section-header">
          <h2>CONTACT</h2>
        </div>
        <div className="hp-section-body">
          <div className="hp-contact-cols">
            <div className="hp-contact-col">
              <h3>ADDRESS</h3>
              <p>
                Young Law Group<br />
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
                <a href="mailto:eyoung@young-lawgroup.com">eyoung@young-lawgroup.com</a>
              </p>
            </div>
          </div>
          <form className="hp-contact-form" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" className="hp-full-width" />
            <textarea placeholder="Message" className="hp-full-width"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="hp-footer">
        <img src="/IBT logo color.jpg" alt="RRT" className="hp-footer-logo" />
        <p className="hp-footer-copyright">
          COPYRIGHT &copy; 2023 YOUNG LAW GROUP | <a href="#">PRIVACY POLICY</a>
        </p>
        <p className="hp-footer-disclaimer">
          Young Law Group, P.C. (YLG), catering to labor unions and workers in Pennsylvania and New Jersey, has
          established the Rapid Response Team to provide urgent legal and investigative assistance for workplace
          incidents. Maintaining strict confidentiality, YLG advises that website information and preliminary
          interactions do not constitute an attorney-client relationship, which requires a formal agreement. For
          more details, please see our <a href="#">DISCLAIMER</a>.
        </p>
      </footer>

    </div>
  );
}

export default HomepageScreen;
