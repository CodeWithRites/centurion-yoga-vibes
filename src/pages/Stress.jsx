import { useState } from "react";

import stressHero from "../assets/images/stress.png";
import setuBandha from "../assets/images/SetuBandhasna.png";
import balasana from "../assets/images/Balasana.png";
import savasana from "../assets/images/Savasana.png";
import sukhasana from "../assets/images/Sukhasana.png";
import vajrasana from "../assets/images/Vajrasana.png";
import paschimottana from "../assets/images/Paschimottanasana.png";

import healthy from "../assets/images/healthy.png";
import sleepImg from "../assets/images/sleep.png";
import breathwork from "../assets/images/breathwork.png";
import meditationImg from "../assets/images/meditation.png";

export default function Stress() {
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
            url(${stressHero})
          `,
        }}
      >
        <div className="overlay">
          <h1>Stress</h1>
          <p>A stress-free mind is the birthright of everyone</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="stress-paragraph">
        <p>
          Stress impacts the way we think, feel and behave, thus affecting all aspects of our lives.
          The consequences of letting stress rule are nothing short of disastrous and tragic.
          <br /><br />
          Sudarshan Kriya, Meditation & Yoga help create inner strength and balance.
        </p>
      </section>

      {/* HIDDEN TRUTHS */}
      <section className="truths">
        <h2>Hidden Truths About Stress</h2>
        <div className="truth-grid">
          <div>
            <h4>Root of Negativity</h4>
            <p>Negative thoughts arise due to stress and tension.</p>
          </div>
          <div>
            <h4>Not Motivating</h4>
            <p>Stress blocks creativity and innovation.</p>
          </div>
          <div>
            <h4>Holding Small Things</h4>
            <p>Stress disturbs mental balance.</p>
          </div>
        </div>
      </section>

      {/* WATCH VIDEOS */}
      <section className="watch-videos">
        <h2>Watch the Related Videos For Stress Relief</h2>
        <p className="section-sub">
          Powerful talks and guided practices to overcome stress.
        </p>

        <div className="video-grid">

          <div className="video-card" onClick={() => playVideo("hgtfNp8KywM")}>
            <img src={setuBandha} alt="Stress Video" />
            <span className="play-btn">▶</span>
            <p>Setu Bandhasana (Bridge Pose)</p>
          </div>

          <div className="video-card" onClick={() => playVideo("2MJGg-dUKh0")}>
            <img src={balasana} alt="Stress Video" />
            <span className="play-btn">▶</span>
            <p>Balasana (Child’s Pose)</p>
          </div>

          <div className="video-card" onClick={() => playVideo("dXYtWuYxWmQ")}>
            <img src={savasana} alt="Stress Video" />
            <span className="play-btn">▶</span>
            <p>Shavasana (Corpse Pose)</p>
          </div>

          <div className="video-card" onClick={() => playVideo("4J97THGPxoc")}>
            <img src={sukhasana} alt="Stress Video" />
            <span className="play-btn">▶</span>
            <p>Sukhasana (Easy Pose)</p>
          </div>

          <div className="video-card" onClick={() => playVideo("82p0aGNJSF4")}>
            <img src={vajrasana} alt="Stress Video" />
            <span className="play-btn">▶</span>
            <p>Vajrasana</p>
          </div>

          <div className="video-card" onClick={() => playVideo("T8sgVyF4Ux4")}>
            <img src={paschimottana} alt="Stress Video" />
            <span className="play-btn">▶</span>
            <p>Paschimottanasana (Seated Forward Bend)</p>
          </div>

        </div>
      </section>

      {/* QUOTE */}
      <section className="stress-quote">
        <blockquote>
          Stress is when there’s too much to do, too little time & no energy left.
          Increase your energy, stress disappears.
          <span>— Gurudev Sri Sri Ravi Shankar</span>
        </blockquote>
      </section>

      {/* HOW TO GET RID */}
      <section className="stress-solutions">
        <h2>How to Get Rid of Stress?</h2>
        <p className="section-sub">
          As you increase your energy levels, stress reduces automatically.
        </p>

        <div className="solution-grid">

          <div className="solution-card food">
            <div className="icon-circle">
              <img src={healthy} alt="Healthy Food" />
            </div>
            <h3>The right amount of food</h3>
            <p>Balanced diet with enough nutrients.</p>
          </div>

          <div className="solution-card sleep">
            <div className="icon-circle">
              <img src={sleepImg} alt="Sleep" />
            </div>
            <h3>The right amount of sleep</h3>
            <p>6 – 8 hours daily.</p>
          </div>

          <div className="solution-card breathwork">
            <div className="icon-circle">
              <img src={breathwork} alt="Breathwork" />
            </div>
            <h3>Breathwork</h3>
            <p>Deep breathing raises energy.</p>
          </div>

          <div className="solution-card meditation">
            <div className="icon-circle">
              <img src={meditationImg} alt="Meditation" />
            </div>
            <h3>Meditation</h3>
            <p>Meditation relieves all stress.</p>
          </div>

        </div>
      </section>

      {/* SUCCESS */}
      <section className="success-section">
        <div className="success-container">
          <h2>Success Without Stress</h2>

          <p className="success-intro">
            True success lies in balance, awareness, and inner calm.
          </p>

          <div className="success-grid">
            <div className="success-item">
              <span className="success-icon">✨</span>
              <h4>Strike a Balance</h4>
              <p>Balance work and relaxation.</p>
            </div>

            <div className="success-item">
              <span className="success-icon">😊</span>
              <h4>Creative Expression</h4>
              <p>Art and music calm the mind.</p>
            </div>

            <div className="success-item">
              <span className="success-icon">🤲</span>
              <h4>Service</h4>
              <p>Helping others refreshes the soul.</p>
            </div>
          </div>

          <p className="success-note">
            Balance is the secret of stress-free success.
          </p>
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
              title="Stress Video"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}