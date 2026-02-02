import { useState } from "react";
import "./yoga.css";

export default function YogaBeginner() {
  const [videoUrl, setVideoUrl] = useState(null);

  // ✅ PASTE IT HERE
  const playVideo = (videoId) => {
    setVideoUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1`);
  };

  const closeVideo = () => {
    setVideoUrl(null);
  };

  return (
    <>
      {/* HERO */}
      <section  className="mental-hero"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,47,36,0.6), rgba(15,47,36,0.6)),
            url('src/assets/images/Yoga1.png')
          `,
        }}>
        <div className="overlay">
          <h1>Beginner Yoga</h1>
          <p>Start Slow • Build Strength • Stay Consistent</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-card">
        Beginner Yoga is designed for those who are new to yoga or restarting
        after a break. The focus is on gentle movements, correct posture,
        relaxed breathing, and building body awareness without strain.
      </section>

      {/* WHY BEGINNER YOGA */}
      <section className="section">
        <h2>Why Start with Beginner Yoga?</h2>

        <div className="truth-grid">
          <div className="truth-card">
            <div className="truth-icon">🧘</div>
            <h4>Safe for the Body</h4>
            <p>Slow postures reduce risk of injury and build confidence.</p>
          </div>

          <div className="truth-card">
            <div className="truth-icon">🌬️</div>
            <h4>Breath Awareness</h4>
            <p>Learn to move with the breath, not against it.</p>
          </div>

          <div className="truth-card">
            <div className="truth-icon">⏳</div>
            <h4>Easy to Maintain</h4>
            <p>Simple routines that fit into daily life.</p>
          </div>
        </div>
      </section>

      {/* BASIC ASANAS */}
      {/* MORE BEGINNER PRACTICES WITH VIDEO */}
<section className="section soft-bg">
  <h2>More Beginner Yoga Practices</h2>
  <p style={{ textAlign: "center", maxWidth: 650, margin: "0 auto 40px" }}>
    These poses are ideal for absolute beginners. Practice slowly and focus on
    breathing rather than perfection.
  </p>

  <div className="yoga-video-grid">

    <div className="yoga-video-card">
      <img src="src/assets/images/Vajrasana.png" alt="Vajrasana" className="yoga-video-img"/>
      <h5>Vajrasana (Thunderbolt Pose)</h5>
      <p>Improves digestion, calms the mind, and is safe after meals.</p>
      <button onClick={() => playVideo("82p0aGNJSF4")}>
        ▶ Watch Practice
      </button>
    </div>

    <div className="yoga-video-card">
      <img src="src/assets/images/Sukhasana.png" alt="Sukhasana" className="yoga-video-img"/>
      <h5>Sukhasana (Easy Pose)</h5>
      <p>Helps maintain steady posture for breathing and meditation.</p>
      <button onClick={() => playVideo("4J97THGPxoc")}>
        ▶ Watch Practice
      </button>
    </div>

    <div className="yoga-video-card">
      <img src="src/assets/images/SetuBandhasna.png" alt="Setu Bandhasana" className="yoga-video-img"/>
      <h5>Setu Bandhasana (Bridge Pose)</h5>
      <p>Strengthens lower back and gently opens the chest.</p>
      <button onClick={() => playVideo("hgtfNp8KywM")}>
        ▶ Watch Practice
      </button>
    </div>

    <div className="yoga-video-card">
      <img src="src/assets/images/Savasana.png" alt="Shavasana" className="yoga-video-img"/>
      <h5>Shavasana (Corpse Pose)</h5>
      <p>Deep relaxation pose for full body recovery.</p>
      <button onClick={() => playVideo("dXYtWuYxWmQ")}>
        ▶ Watch Practice
      </button>
    </div>

    <div className="yoga-video-card">
      <img src="src/assets/images/vrikhyasana.png" alt="Vrikshasana" className="yoga-video-img"/>
      <h5>Vrikshasana (Tree Pose)</h5>
      <p>Improves balance, focus, and mental stability.</p>
      <button onClick={() => playVideo("qbxrBZFBJJU")}>
        ▶ Watch Practice
      </button>
    </div>

    <div className="yoga-video-card">
      <img src="src/assets/images/Bhujangasana.png" alt="Bhujangasana" className="yoga-video-img"/>
      <h5>Bhujangasana (Cobra Pose)</h5>
      <p>Strengthens spine and opens the chest.</p>
      <button onClick={() => playVideo("fOdrW7nf9gw")}>
        ▶ Watch Practice
      </button>
    </div>

    <div className="yoga-video-card">
      <img src="src/assets/images/Trikonasana.png" alt="Trikonasana" className="yoga-video-img"/>
      <h5>Trikonasana (Triangle Pose)</h5>
      <p>Improves digestion, flexibility, and focus.</p>
      <button onClick={() => playVideo("NMnmn8Z39Cc")}>
        ▶ Watch Practice
      </button>
    </div>

    <div className="yoga-video-card">
      <img src="src/assets/images/Tadasana.png" alt="Tadasana" className="yoga-video-img"/>
      <h5>Tadasana (Mountain Pose)</h5>
      <p>Improves posture and body awareness.</p>
      <button onClick={() => playVideo("ET_cKo1Ta1s")}>
        ▶ Watch Practice
      </button>
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
        <h2>Begin Your Yoga Journey Today</h2>
        <p>
          Yoga is not about perfection.
          It is about progress, patience, and consistency.
        </p>
        
      </section>

      {/* VIDEO MODAL */}
      {videoUrl && (
  <div className="video-modal" onClick={closeVideo}>
    <div
      className="video-modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button className="close-video" onClick={closeVideo}>✕</button>

      <iframe
        src={videoUrl}
        title="Yoga Practice Video"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </div>
  </div>
)}
    </>
  );
}
