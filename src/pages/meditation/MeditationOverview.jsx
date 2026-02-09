import { Link } from "react-router-dom";
import "./meditation.css";

/* ================= IMAGE IMPORT (VERCEL SAFE) ================= */
import meditationHero from "../../assets/images/Yoga.png";

export default function MeditationOverview() {
  return (
    <>
      {/* HERO */}
      <section
        className="mental-hero"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,47,36,0.6), rgba(15,47,36,0.6)),
            url(${meditationHero})
          `,
        }}
      >
        <div className="overlay">
          <h1>Meditation Programs</h1>
          <p>Begin • Deepen • Grow — at Your Own Pace</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-card">
        Meditation is a journey inward.
        Whether you are just beginning, seeking deeper awareness,
        or guiding a child toward calmness — there is a path for everyone.
      </section>

      {/* PATHS */}
      <section className="section">
        <h2>Choose Your Meditation Path</h2>

        <div className="meditation-path-grid">

          {/* BEGINNER */}
          <div className="path-card beginner">
            <div className="path-icon">🌱</div>
            <h3>Meditation for Beginners</h3>
            <p>
              Perfect for first-time meditators.
              Learn to calm the mind, reduce stress,
              and build awareness gently.
            </p>

            <ul className="path-points">
              <li>✔ Simple breathing</li>
              <li>✔ Short sessions</li>
              <li>✔ Stress relief</li>
            </ul>

            <Link to="/meditation-beginner" className="btn primary">
              Start as Beginner
            </Link>
          </div>

          {/* ADVANCED */}
          <div className="path-card advanced">
            <div className="path-icon">🔥</div>
            <h3>Advanced Meditation</h3>
            <p>
              For experienced practitioners ready to go deeper
              into silence, witnessing, and inner clarity.
            </p>

            <ul className="path-points">
              <li>✔ Deep awareness</li>
              <li>✔ Longer sitting</li>
              <li>✔ Inner stillness</li>
            </ul>

            <Link to="/meditation-advanced" className="btn secondary">
              Go Deeper
            </Link>
          </div>

          {/* CHILDREN */}
          <div className="path-card children">
            <div className="path-icon">🎈</div>
            <h3>Meditation for Children</h3>
            <p>
              Fun, playful, and calming practices
              designed specially for young minds.
            </p>

            <ul className="path-points">
              <li>✔ Focus & emotions</li>
              <li>✔ Better sleep</li>
              <li>✔ Happy minds</li>
            </ul>

            <Link to="/meditation-children" className="btn primary">
              For Children
            </Link>
          </div>

        </div>
      </section>

      {/* WHY MEDITATION */}
      <section className="section soft-bg">
        <h2>Why Practice Meditation?</h2>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon calm">🧠</div>
            <h4>Mental Clarity</h4>
            <p>Reduces overthinking and mental fatigue.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon balance">❤️</div>
            <h4>Emotional Balance</h4>
            <p>Creates space between emotion and reaction.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon energy">⚡</div>
            <h4>Inner Energy</h4>
            <p>Improves focus, calmness, and vitality.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon sleep">🌙</div>
            <h4>Better Sleep</h4>
            <p>Supports deep, natural rest.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <h2>Your Journey Begins Now</h2>
        <p>
          Meditation is not about changing who you are —<br />
          it is about discovering who you already are.
        </p>
        <Link to="/meditation-beginner" className="btn">
          Begin Meditation
        </Link>
      </section>
    </>
  );
}