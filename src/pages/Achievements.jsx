import "../styles/Achievements.css";
import { Link } from "react-router-dom";

/* 🔒 STATIC MILESTONE IMAGES */
const MILESTONES = [
  { id: 1, title: "Centurion Yoga Expo", image: "/src/assets/images/achieve1.jpg" },
  { id: 2, title: "University Wellness Camp", image: "/src/assets/images/achieve2.jpg" },
  { id: 3, title: "Meditation Awareness Program", image: "/src/assets/images/achieve3.jpg" },
  { id: 4, title: "Community Yoga Drive", image: "/src/assets/images/achieve4.jpg" },
];

export default function Achievements() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="mental-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,47,36,0.65), rgba(15,47,36,0.65)), url('/src/assets/images/Achievement.png')",
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

      {/* ================= JOURNEY TIMELINE ================= */}
      <section className="achievement-timeline">
        <h2>Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item">Started with small campus sessions</div>
          <div className="timeline-item">Expanded to university wellness programs</div>
          <div className="timeline-item">Hosted yoga expos & public workshops</div>
          <div className="timeline-item">Built a community-driven wellness movement</div>
        </div>
      </section>

      {/* ================= RECOGNITION ================= */}
      <section className="achievement-recognition">
        <h2>Recognition & Collaboration</h2>
        <div className="recognition-grid">
          <div className="recognition-card">🏫 University Collaborations</div>
          <div className="recognition-card">🧘 Yoga & Meditation Events</div>
          <div className="recognition-card">🌿 Community Health Drives</div>
          <div className="recognition-card">📜 Certified Yogic Practices</div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="achievement-testimonials">
        <h2>What People Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            “This yoga journey changed my mental clarity and discipline.”
            <span>– Student</span>
          </div>
          <div className="testimonial-card">
            “Authentic guidance rooted in true yogic values.”
            <span>– Faculty Member</span>
          </div>
          <div className="testimonial-card">
            “A positive impact on both body and mind.”
            <span>– Wellness Participant</span>
          </div>
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
            href="https://chat.whatsapp.com/KrJsHe12Ga5CSDD1N5az4R?mode=gi_t"
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