import { useState } from "react";
import "./yoga.css";

/* ================= IMAGE IMPORTS (VERCEL SAFE) ================= */
import pranayamaHero from "../../assets/images/Yoga4.png";
import anulomVilom from "../../assets/images/Anulom Bilom.png";
import bhramari from "../../assets/images/Bhramari.png";
import kapalbhati from "../../assets/images/Kapalbhati.png";
import ujjayi from "../../assets/images/Ujjayi.png";

export default function Pranayama() {
  const [videoUrl, setVideoUrl] = useState(null);

  const playVideo = (videoId) => {
    setVideoUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1`);
  };

  const closeVideo = () => setVideoUrl(null);

  return (
    <>
      {/* HERO */}
      <section
        className="mental-hero"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,47,36,0.6), rgba(15,47,36,0.6)),
            url(${pranayamaHero})
          `,
        }}
      >
        <div className="overlay">
          <h1>Pranayama</h1>
          <p>Breath • Balance • Vital Energy</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-card">
        Pranayama is the science of breath control.
        It purifies the nervous system, calms the mind,
        and boosts life energy (Prana).
      </section>

      {/* BENEFITS */}
      <section className="section">
        <h2>Why Practice Pranayama?</h2>

        <div className="truth-grid">
          <div className="truth-card">
            <div className="truth-icon">🌬️</div>
            <h4>Deep Calm</h4>
            <p>Balances the nervous system.</p>
          </div>

          <div className="truth-card">
            <div className="truth-icon">❤️</div>
            <h4>Heart Health</h4>
            <p>Improves oxygen flow.</p>
          </div>

          <div className="truth-card">
            <div className="truth-icon">🧠</div>
            <h4>Mental Clarity</h4>
            <p>Reduces anxiety and stress.</p>
          </div>
        </div>
      </section>

      {/* PRANAYAMA PRACTICES */}
      <section className="section soft-bg">
        <h2>Essential Pranayama Practices</h2>

        <div className="yoga-video-grid">

          <div className="yoga-video-card">
            <img src={anulomVilom} alt="Anulom Vilom" className="yoga-video-img" />
            <h5>Anulom Vilom</h5>
            <p>Balances left and right brain.</p>
            <button onClick={() => playVideo("blbv5UTBCGg")}>▶ Watch Practice</button>
          </div>

          <div className="yoga-video-card">
            <img src={bhramari} alt="Bhramari" className="yoga-video-img" />
            <h5>Bhramari Pranayama</h5>
            <p>Instant stress relief.</p>
            <button onClick={() => playVideo("hR2ewXJIZSo")}>▶ Watch Practice</button>
          </div>

          <div className="yoga-video-card">
            <img src={kapalbhati} alt="Kapalbhati" className="yoga-video-img" />
            <h5>Kapalbhati</h5>
            <p>Boosts digestion and metabolism.</p>
            <button onClick={() => playVideo("WOw55qnKBSo")}>▶ Watch Practice</button>
          </div>

          <div className="yoga-video-card">
            <img src={ujjayi} alt="Ujjayi" className="yoga-video-img" />
            <h5>Ujjayi Pranayama</h5>
            <p>Improves focus and breath awareness.</p>
            <button onClick={() => playVideo("ZwEdfOuhoY4")}>▶ Watch Practice</button>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <h2>Control Breath, Control Life</h2>
        <p>
          Breath is the bridge between body and mind.
        </p>
      </section>

      {/* VIDEO MODAL */}
      {videoUrl && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-video" onClick={closeVideo}>✕</button>
            <iframe
              src={videoUrl}
              title="Pranayama Video"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}