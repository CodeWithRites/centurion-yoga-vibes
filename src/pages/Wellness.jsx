import { useState } from "react";

export default function Wellness() {
  const [videoUrl, setVideoUrl] = useState(null);

  const playVideo = (url) => {
    setVideoUrl(url);
  };

  const closeVideo = () => {
    setVideoUrl(null);
  };

  return (
    <>
      {/* HERO */}
      <section
        className="mental-hero"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,47,36,0.6), rgba(15,47,36,0.6)),
            url('src/assets/images/Wellness.png')
          `,
        }}
      >
        <div className="overlay">
          <h1>Wellness Is a Way of Life</h1>
          <p>Body • Mind • Soul</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="stress-paragraph">
        <p>
          Wellness is not absence of disease, but harmony of life.
          When body, breath, and mind are aligned,
          health flows naturally.
        </p>
      </section>

      

      {/* WATCH VIDEOS */}
<section className="watch-videos">
  <h2>Yoga & Meditation for Complete Wellness</h2>
  <p className="section-sub">
    Practices for Emotional Healing and Mental Clarity.
  </p>

  <div className="video-grid">

    <div className="video-card" onClick={() => playVideo('ET_cKo1Ta1s')}>
      <img src="src/assets/images/Tadasana.png" alt="Tadasana" />
      <span className="play-btn">▶</span>
      <p>Tadasana (Mountain Pose)</p>
    </div>

    <div className="video-card" onClick={() => playVideo('1xRX1MuoImw')}>
      <img src="src/assets/images/SuryaNamaskar.png" alt="Surya Namaskar" />
      <span className="play-btn">▶</span>
      <p>Surya Namaskar (Sun Salutation)</p>
    </div>

    <div className="video-card" onClick={() => playVideo('qbxrBZFBJJU')}>
      <img src="src/assets/images/vrikhyasana.png" alt="Vrikshasana" />
      <span className="play-btn">▶</span>
      <p>Vrikshasana (Tree Pose)</p>
    </div>

    <div className="video-card" onClick={() => playVideo('blbv5UTBCGg')}>
      <img src="src/assets/images/Anulom Bilom.png" alt="Anulom Vilom" />
      <span className="play-btn">▶</span>
      <p>Anulom Vilom</p>
    </div>

    <div className="video-card" onClick={() => playVideo('hR2ewXJIZSo')}>
      <img src="src/assets/images/Bhramari.png" alt="Bhramari Pranayama" />
      <span className="play-btn">▶</span>
      <p>Bhramari Pranayama</p>
    </div>

    <div className="video-card" onClick={() => playVideo('ZwEdfOuhoY4')}>
      <img src="src/assets/images/Ujjayi.png" alt="Ujjayi Pranayama" />
      <span className="play-btn">▶</span>
      <p>Ujjayi Pranayama</p>
    </div>

  </div>
</section>


        {/* QUOTE */}
      <section className="stress-quote">
        <blockquote>
          “Anger is a sign that the mind has lost its center.
          When awareness returns to the breath, calmness follows naturally.”
          <span>— Sri Sri Ravi Shankar</span>
        </blockquote>
      </section>

      {/* SOLUTIONS */}
      <section className="stress-solutions">
        <h2>How to Live in Complete Wellness?</h2>
        <p className="section-sub">
          Balance in mind creates balance in life.
        </p>

        <div className="solution-grid">

          <div className="solution-card food">
            <div className="icon-circle">
              <img src="src/assets/images/life.png" alt="Healthy Diet" />
            </div>
            <h3>Balanced Lifestyle</h3>
            <p>Wellness begins with harmony between work, rest, and self-care.<br />
When life is balanced, stress reduces and energy flows freely.<br />
Small daily adjustments create lasting physical and mental health.</p>
          </div>

          <div className="solution-card sleep">
            <div className="icon-circle">
              <img src="src/assets/images/concious.png" alt="Sleep" />
            </div>
            <h3>Conscious Living</h3>
            <p>Being present in daily activities improves mental clarity.<br />
Conscious actions reduce stress and increase appreciation for life.<br />
Awareness transforms routine moments into meaningful experiences</p>
          </div>

          <div className="solution-card breathwork">
            <div className="icon-circle">
              <img src="src/assets/images/breathwork.png" alt="Pranayama" />
            </div>
            <h3>Breath & Vitality</h3>
            <p>Breath is the bridge between body and mind.<br />
   Deep breathing improves oxygen flow, immunity, and emotional stability.<br />
   A steady breath supports a steady life.</p>
          </div>

          <div className="solution-card meditation">
            <div className="icon-circle">
              <img src="src/assets/images/meditation.png" alt="Meditation" />
            </div>
            <h3>Meditation & Stillness</h3>
            <p>Meditation aligns body, mind, and emotions.<br />
    Stillness allows the body to heal and the mind to reset.<br />
   From this space, true wellness naturally unfolds.</p>
          </div>

        </div>
      </section>

      {/* SUCCESS */}
      <section className="success-section refined">
        <h2 className="success-title">Complete Wellbeing</h2>
        <div className="success-grid refined-grid">
          <div className="success-card">
            <div className="success-icon">🧘</div>
            <h4>Physical Health</h4>
          </div>
          <div className="success-card">
            <div className="success-icon">💚</div>
            <h4>Mental Peace</h4>
          </div>
          <div className="success-card">
            <div className="success-icon">✨</div>
            <h4>Inner Joy</h4>
          </div>
        </div>
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
        src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1`}
        title="Mental Health Video"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </div>
  </div>
)}
    </>
  );
}
