import { useState } from "react";

/* ================= IMAGE IMPORTS ================= */
import angerHero from "../assets/images/Anger.png";
import balasana from "../assets/images/Balasana.png";
import paschimottanasana from "../assets/images/Paschimottanasana.png";
import ardhaMatsyendrasana from "../assets/images/Ardha Matsyendrasana.png";
import sheetali from "../assets/images/Sheetali.png";
import ujjayi from "../assets/images/Ujjayi.png";
import setuBandhasana from "../assets/images/SetuBandhasna.png";
import exercise from "../assets/images/exercise.png";
import breathwork from "../assets/images/breathwork.png";
import vision from "../assets/images/vision.png";
import healthy from "../assets/images/healthy.png";

export default function Anger() {
  const [videoUrl, setVideoUrl] = useState(null);

  const playVideo = (url) => setVideoUrl(url);
  const closeVideo = () => setVideoUrl(null);

  return (
    <>
      {/* HERO */}
      <section
        className="mental-hero"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,47,36,0.6), rgba(15,47,36,0.6)),
            url(${angerHero})
          `,
        }}
      >
        <div className="overlay">
          <h1>Transform Anger into Awareness</h1>
          <p>Calm • Control • Conscious response</p>
        </div>
      </section>

       {/* INTRO */}
      <section className="stress-paragraph">
        <p>
          Anger arises when energy is intense but directionless.
          Suppressing anger harms health, while awareness transforms it.
          <br /><br />
          Yogic breathing and meditation cool the nervous system
          and create clarity before reaction.
        </p>
      </section>

      {/* TRUTHS */}
      <section className="truths">
        <h2>Hidden Truths About Anger</h2>
        <div className="truth-grid">
          <div>
            <h4>Heat in the System</h4>
            <p>Anger overheats the body.</p>
          </div>
          <div>
            <h4>Pause Is Power</h4>
            <p>Awareness reduces reaction.</p>
          </div>
          <div>
            <h4>Breath Is Key</h4>
            <p>Slow breathing cools emotions.</p>
          </div>
        </div>
      </section>

      {/* WATCH VIDEOS */}
      <section className="watch-videos">
        <h2>Watch the Related Videos for Anger</h2>
        <div className="video-grid">
          <div className="video-card" onClick={() => playVideo("2MJGg-dUKh0")}>
            <img src={balasana} alt="Balasana" />
            <span className="play-btn">▶</span>
            <p>Balasana</p>
          </div>

          <div className="video-card" onClick={() => playVideo("T8sgVyF4Ux4")}>
            <img src={paschimottanasana} alt="Paschimottanasana" />
            <span className="play-btn">▶</span>
            <p>Paschimottanasana</p>
          </div>

          <div className="video-card" onClick={() => playVideo("wJpyMgbxytU")}>
            <img src={ardhaMatsyendrasana} alt="Ardha Matsyendrasana" />
            <span className="play-btn">▶</span>
            <p>Ardha Matsyendrasana</p>
          </div>

          <div className="video-card" onClick={() => playVideo("yqhZfUXgVbk")}>
            <img src={sheetali} alt="Sheetali" />
            <span className="play-btn">▶</span>
            <p>Sheetali Pranayama</p>
          </div>

          <div className="video-card" onClick={() => playVideo("ZwEdfOuhoY4")}>
            <img src={ujjayi} alt="Ujjayi" />
            <span className="play-btn">▶</span>
            <p>Ujjayi Pranayama</p>
          </div>

          <div className="video-card" onClick={() => playVideo("hgtfNp8KywM")}>
            <img src={setuBandhasana} alt="Setu Bandhasana" />
            <span className="play-btn">▶</span>
            <p>Setu Bandhasana</p>
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
        <h2>Tips to Get Rid of Anger</h2>
        <div className="solution-grid">
          <div className="solution-card">
            <img src={exercise} alt="Exercise" />
            <h3>Exercise</h3>
          </div>
          <div className="solution-card">
            <img src={breathwork} alt="Breathing" />
            <h3>Breathe & Meditate</h3>
          </div>
          <div className="solution-card">
            <img src={vision} alt="Vision" />
            <h3>Broaden Vision</h3>
          </div>
          <div className="solution-card">
            <img src={healthy} alt="Food" />
            <h3>Watch Food</h3>
          </div>
        </div>
      </section>

      {/* SUCCESS */}
      <section className="success-section refined">
        <h2 className="success-title">Power with Peace</h2>
        <div className="success-grid refined-grid">
          <div className="success-card">
            <div className="success-icon">❄️</div>
            <h4>Calm Mind</h4>
          </div>
          <div className="success-card">
            <div className="success-icon">🧘</div>
            <h4>Self Control</h4>
          </div>
          <div className="success-card">
            <div className="success-icon">🌿</div>
            <h4>Balanced Energy</h4>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {videoUrl && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-video" onClick={closeVideo}>✕</button>
            <iframe
              src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1`}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}