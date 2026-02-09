import { Link } from "react-router-dom";
import "./yoga.css";

/* ================= IMAGE IMPORT (VERCEL SAFE) ================= */
import yogaHero from "../../assets/images/Yoga.png";

export default function YogaOverview() {
  return (
    <>
      {/* HERO */}
      <section
        className="mental-hero yoga-hero"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,47,36,0.6), rgba(15,47,36,0.6)),
            url(${yogaHero})
          `,
        }}
      >
        <div className="overlay">
          <h1>Yoga Programs</h1>
          <p>Strength • Flexibility • Inner Balance</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-card">
        Yoga is not just exercise — it is a discipline that harmonizes
        body, breath, and mind.  
        Whether you are starting fresh or refining your practice,
        there is a path for you.
      </section>

      {/* TYPES OF YOGA */}
      <section className="section">
        <h2>Types of Yoga</h2>

        <div className="yoga-types-grid">

          <div className="yoga-type-card">
            <h3>Hatha Yoga</h3>
            <p>
              Hatha Yoga focuses on basic postures and breathing techniques.
              It is ideal for beginners as it builds flexibility, strength,
              and body awareness at a gentle pace.
            </p>
          </div>

          <div className="yoga-type-card">
            <h3>Vinyasa Yoga</h3>
            <p>
              Vinyasa Yoga links movement with breath in a continuous flow.
              It improves cardiovascular health, coordination, and mental focus
              while keeping the practice dynamic and energizing.
            </p>
          </div>

          <div className="yoga-type-card">
            <h3>Ashtanga Yoga</h3>
            <p>
              Ashtanga Yoga follows a fixed sequence of postures.
              It builds discipline, stamina, and strength,
              making it suitable for dedicated practitioners.
            </p>
          </div>

          <div className="yoga-type-card">
            <h3>Yin Yoga</h3>
            <p>
              Yin Yoga involves slow, deep stretches held for longer durations.
              It targets connective tissues, improves flexibility,
              and promotes deep relaxation and mindfulness.
            </p>
          </div>

          <div className="yoga-type-card">
            <h3>Kundalini Yoga</h3>
            <p>
              Kundalini Yoga combines posture, breath, mantra, and meditation
              to awaken inner energy. It enhances emotional balance,
              mental clarity, and spiritual awareness.
            </p>
          </div>

          <div className="yoga-type-card">
            <h3>Pranayama</h3>
            <p>
              Pranayama focuses on conscious breathing techniques.
              It calms the nervous system, improves lung capacity,
              and connects the body with the mind.
            </p>
          </div>

        </div>
      </section>

      {/* PATHS */}
      <section className="section">
        <h2>Choose Your Yoga Path</h2>

        <div className="yoga-path-grid">

          <div className="path-card beginner">
            <div className="path-icon">🌱</div>
            <h3>Beginner Yoga</h3>
            <p>
              Perfect for newcomers.
              Build flexibility, posture, and confidence safely.
            </p>

            <ul className="path-points">
              <li>✔ Basic asanas</li>
              <li>✔ Gentle flow</li>
              <li>✔ Injury-safe</li>
            </ul>

            <Link to="/yoga-beginner" className="btn primary">
              Start Beginner Yoga
            </Link>
          </div>

          <div className="path-card advanced">
            <div className="path-icon">🔥</div>
            <h3>Advanced Yoga</h3>
            <p>
              For experienced practitioners seeking strength,
              balance, and mastery.
            </p>

            <ul className="path-points">
              <li>✔ Challenging asanas</li>
              <li>✔ Strength & control</li>
              <li>✔ Deep focus</li>
            </ul>

            <Link to="/yoga-advanced" className="btn secondary">
              Advance Your Practice
            </Link>
          </div>

          <div className="path-card pranayama">
            <div className="path-icon">🌬️</div>
            <h3>Pranayama</h3>
            <p>
              Breath-based yogic techniques
              for energy, calmness, and clarity.
            </p>

            <ul className="path-points">
              <li>✔ Breath control</li>
              <li>✔ Stress reduction</li>
              <li>✔ Mental clarity</li>
            </ul>

            <Link to="/pranayama" className="btn primary">
              Explore Pranayama
            </Link>
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="section soft-bg">
        <h2>Why Practice Yoga?</h2>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">🧘</div>
            <h4>Flexibility</h4>
            <p>Improves joint mobility and posture.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">💪</div>
            <h4>Strength</h4>
            <p>Builds balanced muscular strength.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🧠</div>
            <h4>Mental Focus</h4>
            <p>Sharpens concentration and awareness.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🌿</div>
            <h4>Overall Wellness</h4>
            <p>Supports holistic physical & mental health.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <h2>Begin Your Yoga Journey</h2>
        <p>
          Yoga is a lifelong companion —
          start where you are, grow at your pace.
        </p>
        <Link to="/yoga-beginner" className="btn">
          Start Yoga Today
        </Link>
      </section>
    </>
  );
}