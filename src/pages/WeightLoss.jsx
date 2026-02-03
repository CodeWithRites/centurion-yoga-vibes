import { useState } from "react";

/* ================= IMAGE IMPORTS ================= */
import weightLossHero from "../assets/images/WeightLoss.png";
import surya from "../assets/images/SuryaNamaskar.png";
import trikonasana from "../assets/images/Trikonasana.png";
import bhujangasana from "../assets/images/Bhujangasana.png";
import kapalbhati from "../assets/images/Kapalbhati.png";
import ardhaMatsyendrasana from "../assets/images/Ardha Matsyendrasana.png";
import utkatasana from "../assets/images/Utkatasana.png";
import healthy from "../assets/images/healthy.png";
import sleepImg from "../assets/images/sleep.png";
import breathwork from "../assets/images/breathwork.png";
import meditation from "../assets/images/meditation.png";

export default function WeightLoss() {
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
            url(${weightLossHero})
          `,
        }}
      >
        <div className="overlay">
          <h1>Healthy Weight = Healthy Life</h1>
          <p>Balance • Discipline • Sustainable fitness</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="stress-paragraph">
        <p>
          Weight loss is not about extreme dieting or exhausting workouts.
          It is about restoring balance in the body, mind, and lifestyle.
          <br /><br />
          Yoga, mindful eating, proper breathing, and meditation activate
          the body’s natural fat-burning mechanisms and improve metabolism.
        </p>
      </section>

      {/* HIDDEN TRUTHS */}
      <section className="truths">
        <h2>Hidden Truths About Weight Loss</h2>

        <div className="truth-grid">
          <div>
            <h4>Stress Causes Weight Gain</h4>
            <p>High stress increases cortisol, leading to fat accumulation.</p>
          </div>

          <div>
            <h4>Digestion Is Key</h4>
            <p>Proper digestion and gut health are essential for fat loss.</p>
          </div>

          <div>
            <h4>Consistency Beats Intensity</h4>
            <p>Daily simple practices bring lasting transformation.</p>
          </div>
        </div>
      </section>

      {/* WATCH VIDEOS */}
      <section className="watch-videos">
        <h2>Watch the Related Videos for Weight Loss</h2>
        <p className="section-sub">
          Yogic practices that boost metabolism and burn excess fat naturally.
        </p>

        <div className="video-grid">
          <div className="video-card" onClick={() => playVideo("1xRX1MuoImw")}>
            <img src={surya} alt="Surya Namaskar" />
            <span className="play-btn">▶</span>
            <p>Surya Namaskar</p>
          </div>

          <div className="video-card" onClick={() => playVideo("S6gB0QHbWFE")}>
            <img src={trikonasana} alt="Trikonasana" />
            <span className="play-btn">▶</span>
            <p>Trikonasana</p>
          </div>

          <div className="video-card" onClick={() => playVideo("fOdrW7nf9gw")}>
            <img src={bhujangasana} alt="Bhujangasana" />
            <span className="play-btn">▶</span>
            <p>Bhujangasana</p>
          </div>

          <div className="video-card" onClick={() => playVideo("o09woNI0D3A")}>
            <img src={kapalbhati} alt="Kapalbhati" />
            <span className="play-btn">▶</span>
            <p>Kapalbhati Pranayama</p>
          </div>

          <div className="video-card" onClick={() => playVideo("Qu9WBP8nUF0")}>
            <img src={ardhaMatsyendrasana} alt="Ardha Matsyendrasana" />
            <span className="play-btn">▶</span>
            <p>Ardha Matsyendrasana</p>
          </div>

          <div className="video-card" onClick={() => playVideo("4xyTmX_OMiM")}>
            <img src={utkatasana} alt="Utkatasana" />
            <span className="play-btn">▶</span>
            <p>Utkatasana</p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="stress-quote">
        <blockquote>
          Take care of your body. It is the only place you have to live.
          <span>— Yogic Wisdom</span>
        </blockquote>
      </section>

      {/* HOW TO ACHIEVE */}
      <section className="stress-solutions">
        <h2>How to Achieve Healthy Weight?</h2>

        <div className="solution-grid">
          <div className="solution-card food">
            <div className="icon-circle">
              <img src={healthy} alt="Healthy Diet" />
            </div>
            <h3>Mindful Eating</h3>
            <p>Improves digestion and prevents overeating.</p>
          </div>

          <div className="solution-card sleep">
            <div className="icon-circle">
              <img src={sleepImg} alt="Sleep" />
            </div>
            <h3>Quality Sleep</h3>
            <p>Regulates hormones responsible for weight balance.</p>
          </div>

          <div className="solution-card breathwork">
            <div className="icon-circle">
              <img src={breathwork} alt="Pranayama" />
            </div>
            <h3>Pranayama</h3>
            <p>Boosts metabolism and detoxifies the body.</p>
          </div>

          <div className="solution-card meditation">
            <div className="icon-circle">
              <img src={meditation} alt="Meditation" />
            </div>
            <h3>Meditation</h3>
            <p>Reduces emotional eating and builds discipline.</p>
          </div>
        </div>
      </section>

           {/* SUCCESS */}
      <section className="success-section refined">
        <div className="success-container">
          <h2 className="success-title">Fitness Begins from Within</h2>

          <p className="success-intro">
            True fitness is not just a slim body, but a balanced mind and steady energy.
          </p>

          <div className="success-grid refined-grid">
            <div className="success-card">
              <div className="success-icon">🔥</div>
              <h4>Improved Metabolism</h4>
              <p>Enhances natural fat-burning.</p>
            </div>

            <div className="success-card">
              <div className="success-icon">💪</div>
              <h4>Stronger Body</h4>
              <p>Builds strength and flexibility.</p>
            </div>

            <div className="success-card">
              <div className="success-icon">🌱</div>
              <h4>Sustainable Results</h4>
              <p>Healthy weight without extreme effort.</p>
            </div>
          </div>

          <p className="success-note refined-note">
            When lifestyle is balanced, the body finds its ideal weight.
          </p>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {videoUrl && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-video" onClick={closeVideo}>✕</button>
            <iframe
              src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1`}
              title="Weight Loss Video"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}