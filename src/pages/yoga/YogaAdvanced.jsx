import { useState } from "react";
import "./yoga.css";

export default function YogaAdvanced() {
  const [videoUrl, setVideoUrl] = useState(null);

  const playVideo = (videoId) => {
    setVideoUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1`);
  };

  const closeVideo = () => setVideoUrl(null);

  return (
    <>
      {/* HERO */}
      <section  className="mental-hero"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,47,36,0.6), rgba(15,47,36,0.6)),
            url('src/assets/images/Yoga3.png')
          `,
        }}>
        <div className="overlay">
          <h1>Advanced Yoga</h1>
          <p>Strength • Control • Inner Mastery</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-card">
        Advanced Yoga is for practitioners who have built basic flexibility
        and body awareness. These practices improve strength, balance,
        endurance, and deep mind–body control.
      </section>

      {/* WHY */}
      <section className="section">
        <h2>Why Practice Advanced Yoga?</h2>

        <div className="truth-grid">
          <div className="truth-card">
            <div className="truth-icon">🔥</div>
            <h4>Build Inner Strength</h4>
            <p>Challenges muscles and breath coordination.</p>
          </div>

          <div className="truth-card">
            <div className="truth-icon">⚖️</div>
            <h4>Perfect Balance</h4>
            <p>Improves stability and posture awareness.</p>
          </div>

          <div className="truth-card">
            <div className="truth-icon">🧠</div>
            <h4>Mental Discipline</h4>
            <p>Sharpens focus and inner stillness.</p>
          </div>
        </div>
      </section>

      {/* ADVANCED ASANAS */}
      <section className="section soft-bg">
        <h2>Advanced Yoga Practices</h2>

        <div className="yoga-video-grid">

          <div className="yoga-video-card">
            <img src="src/assets/images/Bakasana.jpg" alt="Bakasana" className="yoga-video-img" />
            <h5>Bakasana (Crow Pose)</h5>
            <p>Builds arm strength and balance.</p>
            <button onClick={() => playVideo("wSm_yx6DkEU")}>▶ Watch Practice</button>
          </div>

          <div className="yoga-video-card">
            <img src="src/assets/images/Sirsasana.jpg" alt="Sirsasana" className="yoga-video-img" />
            <h5>Sirsasana (Headstand)</h5>
            <p>Improves circulation and mental clarity.</p>
            <button onClick={() => playVideo("vqP5HTsKen4")}>▶ Watch Practice</button>
          </div>

          <div className="yoga-video-card">
            <img src="src/assets/images/Dhanurasana.jpeg" alt="Dhanurasana" className="yoga-video-img" />
            <h5>Dhanurasana (Bow Pose)</h5>
            <p>Strengthens spine and opens chest.</p>
            <button onClick={() => playVideo("xm00XMmBbto")}>▶ Watch Practice</button>
          </div>

          <div className="yoga-video-card">
            <img src="src/assets/images/Chakrasana.webp" alt="Chakrasana" className="yoga-video-img" />
            <h5>Chakrasana (Wheel Pose)</h5>
            <p>Enhances flexibility and nervous energy.</p>
            <button onClick={() => playVideo("ho2QdRsro00")}>▶ Watch Practice</button>
          </div>

        </div>
      </section>

       {/* HOW TO PRACTICE */}
      <section className="section">
        <h2>How to Practice (Simple Steps)</h2>

        <div className="steps-timeline">
          <div className="step-line"></div>

          <div className="step-item">
            <span className="step-number">1</span>
            <p>Choose a quiet, comfortable space</p>
          </div>

          <div className="step-item">
            <span className="step-number">2</span>
            <p>Wear loose and comfortable clothing</p>
          </div>

          <div className="step-item">
            <span className="step-number">3</span>
            <p>Move slowly and breathe naturally</p>
          </div>

          <div className="step-item">
            <span className="step-number">4</span>
            <p>Stop if there is pain or discomfort</p>
          </div>

          <div className="step-item">
            <span className="step-number">5</span>
            <p>End with relaxation or short meditation</p>
          </div>
        </div>
      </section>

      {/* DAILY ROUTINE */}
      <section className="section soft-bg">
        <h2>Beginner Daily Yoga Routine</h2>

        <div className="routine-grid">
          <div className="routine-card">🕒 <span>Morning or Evening</span></div>
          <div className="routine-card">⏱ <span>15–25 Minutes</span></div>
          <div className="routine-card">📅 <span>5–6 Days / Week</span></div>
          <div className="routine-card">🧘 <span>Gentle & Relaxed</span></div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
        <h2>Benefits You Will Experience</h2>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon calm">💚</div>
            <h4>Better Flexibility</h4>
            <p>Gradual improvement in body movement.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon balance">🧠</div>
            <h4>Mental Calm</h4>
            <p>Reduces stress and mental tension.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon energy">⚡</div>
            <h4>More Energy</h4>
            <p>Improves stamina and daily productivity.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon sleep">😴</div>
            <h4>Better Sleep</h4>
            <p>Helps relax the body and mind.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <h2>Advance Your Practice</h2>
        <p>
          Advanced yoga is not about ego.
          It is about control, patience, and awareness.
        </p>
      </section>

      {/* VIDEO MODAL */}
      {videoUrl && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-video" onClick={closeVideo}>✕</button>
            <iframe
              src={videoUrl}
              title="Advanced Yoga Video"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
