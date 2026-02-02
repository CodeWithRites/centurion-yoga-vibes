import "../styles/Achievements.css";
import { Link } from "react-router-dom";

/* ✅ IMPORT IMAGES (MANDATORY FOR VITE BUILD) */
import achieve1 from "../assets/images/CenturionYoga.png";
import achieve2 from "../assets/images/Yoga1.png";
import achieve3 from "../assets/images/meditation.png";
import achieve4 from "../assets/images/Yoga2.png";
import achievementHero from "../assets/images/Achievement.png";

/* 🔒 STATIC MILESTONE IMAGES */
const MILESTONES = [
  { id: 1, title: "Centurion Yoga Expo", image: achieve1 },
  { id: 2, title: "University Wellness Camp", image: achieve2 },
  { id: 3, title: "Meditation Awareness Program", image: achieve3 },
  { id: 4, title: "Community Yoga Drive", image: achieve4 },
];

export default function Achievements() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="mental-hero"
        style={{
          backgroundImage: `linear-gradient(
            rgba(15,47,36,0.65),
            rgba(15,47,36,0.65)
          ), url(${achievementHero})`,
        }}
      >
        <div className="overlay">
          <h1>Our Achievements</h1>
          <p>Milestones that reflect healing, discipline & transformation</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="stress-paragraph">
        <p>
          Centurion Yoga Vibes is not about trophies — it is about lives
          transformed. These milestones reflect discipline, healing, and
          community impact created through yoga & mindfulness.
        </p>
      </section>

      {/* ================= IMPACT STATS ================= */}
      <section className="achievement-stats">
        <div className="stat-box"><h3>100+</h3><p>Students Guided</p></div>
        <div className="stat-box"><h3>20+</h3><p>Wellness Camps</p></div>
        <div className="stat-box"><h3>5+</h3><p>Years of Service</p></div>
        <div className="stat-box"><h3>100%</h3><p>Authentic Yoga</p></div>
      </section>

      {/* ================= MILESTONE GALLERY ================= */}
      <section className="achievement-section">
        <h2>Milestone Gallery</h2>
        <p className="section-sub">Moments that define our journey</p>

        <div className="achievement-grid">
          {MILESTONES.map(item => (
            <div key={item.id} className="achievement-video-card">
              <div
                className="achievement-bg"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="achievement-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="achievement-cta">
        <h2>Be Part of the Journey</h2>
        <p>
          Join our yoga & wellness programs and create your own transformation
          story.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn primary">Contact Us</Link>
          <a
            href="https://chat.whatsapp.com/KrJsHe12Ga5CSDD1N5az4R"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            Join WhatsApp Group
          </a>
        </div>
      </section>
    </>
  );
}