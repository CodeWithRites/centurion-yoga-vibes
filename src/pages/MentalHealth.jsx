import { useState } from "react";


import mentalHero from "../assets/images/MentalHealth.png";
import sukhasana from "../assets/images/Sukhasana.png";
import balasana from "../assets/images/Balasana.png";
import savasana from "../assets/images/Savasana.png";
import paschimottana from "../assets/images/Paschimottanasana.png";

import healthy from "../assets/images/healthy.png";
import sleepImg from "../assets/images/sleep.png";
import breathwork from "../assets/images/breathwork.png";
import meditationImg from "../assets/images/meditation.png";

export default function MentalHealth() {
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
            url(${mentalHero})
          `,
        }}
      >
        <div className="overlay">
          <h1>Mental Strength = True Success</h1>
          <p>Calm mind • Emotional balance • Inner peace</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="stress-paragraph">
        <p>
          Mental health affects how we think, feel, and act in daily life. It
          influences how we handle stress, relate to others, and make choices.
          <br /><br />
          Yoga, meditation, and conscious breathing help restore emotional
          balance and inner clarity.
        </p>
      </section>

      {/* HIDDEN TRUTHS */}
      <section className="truths">
        <h2>Hidden Truths About Mental Health</h2>
        <div className="truth-grid">
          <div>
            <h4>Mind Needs Training</h4>
            <p>Just like the body, the mind needs daily care and discipline.</p>
          </div>
          <div>
            <h4>Thoughts Affect Health</h4>
            <p>Negative thinking impacts emotions and energy levels.</p>
          </div>
          <div>
            <h4>Silence Heals</h4>
            <p>Moments of silence and meditation recharge mental strength.</p>
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="watch-videos">
        <h2>Watch the Related Videos for Mental Wellness</h2>

        <div className="video-grid">
          <div className="video-card" onClick={() => playVideo("4J97THGPxoc")}>
            <img src={sukhasana} alt="Sukhasana" />
            <span className="play-btn">▶</span>
            <p>Sukhasana</p>
          </div>

          <div className="video-card" onClick={() => playVideo("2MJGg-dUKh0")}>
            <img src={balasana} alt="Balasana" />
            <span className="play-btn">▶</span>
            <p>Balasana</p>
          </div>

          <div className="video-card" onClick={() => playVideo("dXYtWuYxWmQ")}>
            <img src={savasana} alt="Shavasana" />
            <span className="play-btn">▶</span>
            <p>Shavasana</p>
          </div>

          <div className="video-card" onClick={() => playVideo("T8sgVyF4Ux4")}>
            <img src={paschimottana} alt="Paschimottanasana" />
            <span className="play-btn">▶</span>
            <p>Paschimottanasana</p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="stress-quote">
        <blockquote>
          The quality of your mind determines the quality of your life.
          <span>— Yogic Wisdom</span>
        </blockquote>
      </section>

      {/* SOLUTIONS */}
      <section className="stress-solutions">
        <h2>How to Improve Mental Health?</h2>

        <div className="solution-grid">
          <div className="solution-card food">
            <div className="icon-circle">
              <img src={healthy} alt="Healthy Diet" />
            </div>
            <h3>Sattvic Diet</h3>
            <p>Fresh, light food supports clarity and balance.</p>
          </div>

          <div className="solution-card sleep">
            <div className="icon-circle">
              <img src={sleepImg} alt="Sleep" />
            </div>
            <h3>Proper Sleep</h3>
            <p>Quality sleep stabilizes emotions.</p>
          </div>

          <div className="solution-card breathwork">
            <div className="icon-circle">
              <img src={breathwork} alt="Pranayama" />
            </div>
            <h3>Pranayama</h3>
            <p>Calms the nervous system.</p>
          </div>

          <div className="solution-card meditation">
            <div className="icon-circle">
              <img src={meditationImg} alt="Meditation" />
            </div>
            <h3>Meditation</h3>
            <p>Builds emotional resilience.</p>
          </div>
        </div>
      </section>
      {/* SUCCESS */}
      <section className="success-section refined">
        <div className="success-container">
          <h2 className="success-title">Mental Strength = True Success</h2>

          <p className="success-intro">
            Success is inner peace while achieving outer goals.
          </p>

          <div className="success-grid refined-grid">
            <div className="success-card">
              <div className="success-icon">🧠</div>
              <h4>Clear Thinking</h4>
              <p>Improves focus and decision-making.</p>
            </div>

            <div className="success-card">
              <div className="success-icon">💚</div>
              <h4>Emotional Stability</h4>
              <p>Reduces anxiety and fear.</p>
            </div>

            <div className="success-card">
              <div className="success-icon">🌿</div>
              <h4>Inner Peace</h4>
              <p>Creates harmony within.</p>
            </div>
          </div>

          <p className="success-note refined-note">
            When the mind is healthy, life flows naturally.
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
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Mental Health Video"
            />
          </div>
        </div>
      )}
    </>
  );
}