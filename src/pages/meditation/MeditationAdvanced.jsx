import { useState } from "react";
import "./meditation.css";

/* ================= IMAGE IMPORT (VERCEL SAFE) ================= */
import meditationAdvancedHero from "../../assets/images/Yoga.png";

export default function MeditationAdvanced() {
  const [videoUrl, setVideoUrl] = useState(null);

  return (
    <>
      {/* HERO */}
      <section
        className="mental-hero"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,47,36,0.6), rgba(15,47,36,0.6)),
            url(${meditationAdvancedHero})
          `,
        }}
      >
        <div className="overlay">
          <h1>Advanced Meditation</h1>
          <p>Depth • Awareness • Inner Silence</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-card">
        Advanced meditation moves beyond relaxation into deep awareness.
        It dissolves mental patterns, sharpens witnessing, and allows
        silence to reveal itself naturally.
      </section>

      {/* WHY */}
      <section className="section">
        <h2>Why Advanced Meditation?</h2>
        <div className="truth-grid">
          <div className="truth-card">
            <div className="truth-icon">👁️</div>
            <h4>Witnessing Awareness</h4>
            <p>
              Thoughts are observed without attachment or reaction.
            </p>
          </div>

          <div className="truth-card">
            <div className="truth-icon">🌌</div>
            <h4>Inner Silence</h4>
            <p>
              Stillness arises naturally when effort drops.
            </p>
          </div>

          <div className="truth-card">
            <div className="truth-icon">🔥</div>
            <h4>Energy Awareness</h4>
            <p>
              Breath, mind, and subtle energy begin to merge.
            </p>
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="section">
        <h2>Who Should Practice?</h2>
        <ul className="who-list">
          <li>🧘 Experienced meditators</li>
          <li>🧠 Stable focus & awareness</li>
          <li>🌿 Seekers of inner silence</li>
          <li>🔥 Energy & consciousness explorers</li>
        </ul>
      </section>

      {/* BENEFITS */}
      <section className="section soft-bg">
        <h2 className="section-title">Benefits You Will Experience</h2>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon calm">🧠</div>
            <h4>Deep Mental Stillness</h4>
            <p>Thoughts lose grip and clarity expands.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon balance">🌊</div>
            <h4>Emotional Neutrality</h4>
            <p>Emotions arise without disturbance.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon energy">⚡</div>
            <h4>Heightened Energy Flow</h4>
            <p>Subtle awareness strengthens vitality.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon sleep">🌙</div>
            <h4>Natural Restfulness</h4>
            <p>Effortless rest even with less sleep.</p>
          </div>
        </div>
      </section>

      {/* HOW TO PRACTICE */}
      <section className="section">
        <h2 className="section-title">How to Practice (Advanced Approach)</h2>

        <div className="steps-timeline">
          <div className="step-line"></div>

          <div className="step-item">
            <span className="step-number">1</span>
            <p>Sit effortlessly with spine naturally upright</p>
          </div>

          <div className="step-item">
            <span className="step-number">2</span>
            <p>Drop intention — allow awareness to rest</p>
          </div>

          <div className="step-item">
            <span className="step-number">3</span>
            <p>Witness thoughts without labeling</p>
          </div>

          <div className="step-item">
            <span className="step-number">4</span>
            <p>Remain aware of silence between thoughts</p>
          </div>

          <div className="step-item">
            <span className="step-number">5</span>
            <p>End gently without mental commentary</p>
          </div>
        </div>
      </section>

      {/* DAILY ROUTINE */}
      <section className="section soft-bg">
        <h2 className="section-title">Advanced Daily Routine</h2>

        <div className="routine-grid">
          <div className="routine-card">🕒 <span>Early Morning / Night</span></div>
          <div className="routine-card">⏱ <span>20–40 Minutes</span></div>
          <div className="routine-card">📅 <span>Daily or Alternate Days</span></div>
          <div className="routine-card">🧘 <span>Stable Seated Posture</span></div>
        </div>
      </section>
    </>
  );
}