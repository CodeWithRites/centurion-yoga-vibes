import { useState } from "react";
import "./meditation.css";

/* ================= IMAGE IMPORT (VERCEL SAFE) ================= */
import meditationBeginnerHero from "../../assets/images/Yoga.png";

export default function MeditationBeginner() {
  return (
    <>
      {/* HERO */}
      <section
        className="mental-hero premium-hero"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,47,36,0.6), rgba(15,47,36,0.6)),
            url(${meditationBeginnerHero})
          `,
        }}
      >
        <div className="overlay">
          <h1>🧘 Meditation for Beginners</h1>
          <p>Train Attention • Build Calm • Stay Consistent</p>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="intro-card premium-card">
        <h2>What It Is (Plain Truth)</h2>
        <p>
          Beginner meditation is <strong>training attention</strong>, not stopping thoughts.
        </p>
        <p>
          If you are trying to “empty your mind”, you are doing it wrong.
        </p>
        <p className="highlight-text">
          Thoughts will come.  
          Your job is to notice and gently return.
        </p>
      </section>

      {/* WHY */}
      <section className="section">
        <h2 className="section-title">Why Beginners Should Meditate</h2>

        <div className="truth-grid premium-grid">
          <div className="truth-card glow">
            <span className="icon">🌱</span>
            <h4>Stress Reduction</h4>
            <p>Reduces anxiety, stress, and emotional overload.</p>
          </div>

          <div className="truth-card glow">
            <span className="icon">🎯</span>
            <h4>Better Focus</h4>
            <p>Improves concentration and emotional control.</p>
          </div>

          <div className="truth-card glow">
            <span className="icon">😴</span>
            <h4>Improved Sleep</h4>
            <p>Helps calm overthinking and improves sleep quality.</p>
          </div>

          <div className="truth-card glow">
            <span className="icon">🧠</span>
            <h4>Mental Discipline</h4>
            <p>Builds calm strength slowly and safely.</p>
          </div>
        </div>

        <p className="center-note emphasis">
          No flexibility. No spirituality required.
        </p>
      </section>

      {/* DURATION */}
      <section className="section soft-bg">
        <h2 className="section-title">How Long Should You Meditate?</h2>

        <div className="routine-grid premium-grid">
          <div className="routine-card big">⏱ 5 Minutes to Start</div>
          <div className="routine-card big">📈 10–15 Minutes Later</div>
          <div className="routine-card big">🗓 After 2–3 Weeks</div>
          <div className="routine-card big">🏆 Consistency Wins</div>
        </div>

        <p className="center-note">
          More time does <strong>not</strong> mean better results.
        </p>
      </section>

      {/* HOW TO SIT */}
      <section className="section sit-section">
        <h2 className="section-title">How to Sit Comfortably</h2>

        <div className="sit-card">
          <ul className="sit-list">
            <li><span>🪑</span> Sit on chair or floor</li>
            <li><span>🧍</span> Spine straight (not stiff)</li>
            <li><span>🤲</span> Hands relaxed</li>
            <li><span>👁️</span> Eyes closed or half-open</li>
          </ul>

          <div className="sit-note">
            Comfort <strong></strong> posture perfection
          </div>
        </div>
      </section>

      {/* TECHNIQUE */}
      <section className="section technique-section">
        <h2 className="section-title">Best Beginner Technique</h2>
        <p className="tech-subtitle">Breath Awareness Meditation</p>

        <div className="tech-steps">
          <div className="tech-step"><span className="step-circle">1</span><p>Close your eyes</p></div>
          <div className="tech-step"><span className="step-circle">2</span><p>Breathe normally</p></div>
          <div className="tech-step"><span className="step-circle">3</span><p>Feel air at nose or chest</p></div>
          <div className="tech-step"><span className="step-circle">4</span><p>Mind wanders → gently return</p></div>
          <div className="tech-step"><span className="step-circle">5</span><p>Continue till time ends</p></div>
        </div>

        <p className="tech-footer">Simple — but powerful.</p>
      </section>

      {/* MISTAKES */}
      <section className="section">
        <h2 className="section-title">Common Beginner Mistakes</h2>

        <div className="truth-grid premium-grid">
          <div className="truth-card warn">❌ Trying too hard</div>
          <div className="truth-card warn">⚠️ Expecting instant peace</div>
          <div className="truth-card warn">🧠 Judging yourself</div>
          <div className="truth-card warn">⏳ Sitting too long early</div>
        </div>

        <p className="center-note emphasis">
          Meditation is observation — not achievement.
        </p>
      </section>

      {/* DAILY ROUTINE */}
      <section className="section soft-bg">
        <h2 className="section-title">Beginner Daily Routine</h2>

        <div className="routine-grid premium-grid">
          <div className="routine-card">🌅 Morning / Before Sleep</div>
          <div className="routine-card">🔕 Phone on Silent</div>
          <div className="routine-card">📍 Quiet Place</div>
          <div className="routine-card">🗓 Same Time Daily</div>
        </div>
      </section>
    </>
  );
}