import { useState } from "react";
import "./meditation.css";

export default function MeditationChildren() {
  const [videoUrl, setVideoUrl] = useState(null);

  return (
    <>
      {/* HERO */}
      <section className="mental-hero kids-hero">
        <div className="overlay">
          <h1>Meditation for Children</h1>
          <p>Fun • Focus • Happy Minds</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-card kids-intro">
        Children meditation helps young minds feel calm, focused, and happy.
        Through simple breathing, imagination, and gentle awareness,
        kids learn how to relax and manage emotions naturally.
      </section>

      {/* WHY */}
      <section className="section">
        <h2>Why Meditation for Kids?</h2>

        <div className="truth-grid">
          <div className="truth-card kids-card">
            <div className="truth-icon">🎈</div>
            <h4>Improves Focus</h4>
            <p>Helps children concentrate better in studies and play.</p>
          </div>

          <div className="truth-card kids-card">
            <div className="truth-icon">😊</div>
            <h4>Emotional Balance</h4>
            <p>Teaches kids how to calm anger, fear, and restlessness.</p>
          </div>

          <div className="truth-card kids-card">
            <div className="truth-icon">🌙</div>
            <h4>Better Sleep</h4>
            <p>Relaxed minds fall asleep faster and sleep deeper.</p>
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="section">
        <h2>Who Is This For?</h2>

        <ul className="who-list kids-list">
          <li>🧒 Children aged 5–14</li>
          <li>🎒 School-going kids</li>
          <li>😵 Easily distracted minds</li>
          <li>😴 Kids with sleep problems</li>
        </ul>
      </section>

      {/* BENEFITS */}
      <section className="section soft-bg">
        <h2 className="section-title">Benefits Children Experience</h2>

        <div className="benefits-grid kids-benefits">
          <div className="benefit-card">
            <div className="benefit-icon calm">🧠</div>
            <h4>Better Focus</h4>
            <p>Improves attention and learning ability.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon balance">💖</div>
            <h4>Emotional Control</h4>
            <p>Children respond calmly instead of reacting.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon energy">⚡</div>
            <h4>Positive Energy</h4>
            <p>Reduces hyperactivity and restlessness.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon sleep">🌙</div>
            <h4>Peaceful Sleep</h4>
            <p>Promotes healthy sleep patterns.</p>
          </div>
        </div>
      </section>

      {/* HOW TO PRACTICE */}
      <section className="section">
        <h2 className="section-title">How Kids Can Practice</h2>

        <div className="steps-timeline kids-steps">
          <div className="step-line"></div>

          <div className="step-item">
            <span className="step-number">1</span>
            <p>Sit comfortably like a superhero 🦸</p>
          </div>

          <div className="step-item">
            <span className="step-number">2</span>
            <p>Close eyes and smile gently 😊</p>
          </div>

          <div className="step-item">
            <span className="step-number">3</span>
            <p>Breathe in like filling a balloon 🎈</p>
          </div>

          <div className="step-item">
            <span className="step-number">4</span>
            <p>Imagine a happy place 🌈</p>
          </div>

          <div className="step-item">
            <span className="step-number">5</span>
            <p>Open eyes slowly and feel calm ✨</p>
          </div>
        </div>
      </section>

      {/* DAILY ROUTINE */}
      <section className="section soft-bg">
        <h2 className="section-title">Simple Daily Routine</h2>

        <div className="routine-grid kids-routine">
          <div className="routine-card">🕒 <span>Morning or Evening</span></div>
          <div className="routine-card">⏱ <span>3–7 Minutes</span></div>
          <div className="routine-card">📅 <span>Daily</span></div>
          <div className="routine-card">🪑 <span>Sitting or Lying Down</span></div>
        </div>
      </section>

      {/* PARENT GUIDE */}
<section className="section soft-bg">
  <h2 className="section-title">Parent Guide for Children’s Meditation</h2>

  <div className="parent-guide-card">
    <div className="guide-icon">📘</div>

    <div className="guide-content">
      <h3>How Parents Can Support Meditation at Home</h3>

      <p>
        Children learn best when meditation is playful, gentle,
        and pressure-free. This guide helps parents introduce
        meditation safely and joyfully.
      </p>

      <ul className="guide-points">
        <li>✔ Best age to start meditation</li>
        <li>✔ How long children should meditate</li>
        <li>✔ Fun breathing & imagination exercises</li>
        <li>✔ Common mistakes parents should avoid</li>
      </ul>

      <a
        href="/assets/pdfs/Children-Meditation-Parent-Guide.pdf"
        download
        className="btn primary"
      >
        Download Parent Guide (PDF)
      </a>
    </div>
  </div>
</section>

    </>
  );
}
