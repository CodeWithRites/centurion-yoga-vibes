import { useState } from "react";

/* ================= IMAGE IMPORTS ================= */
import depressionHero from "../assets/images/Depression.png";
import balasana from "../assets/images/Balasana.png";
import sukhasana from "../assets/images/Sukhasana.png";
import bhujangasana from "../assets/images/Bhujangasana.png";
import setuBandhasana from "../assets/images/SetuBandhasna.png";
import vajrasana from "../assets/images/Vajrasana.png";
import savasana from "../assets/images/Savasana.png";
import mindful from "../assets/images/mindfull.png";
import sleepImg from "../assets/images/sleep.png";
import breathwork from "../assets/images/breathwork.png";
import meditation from "../assets/images/meditation.png";

export default function Depression() {
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
            url(${depressionHero})
          `,
        }}
      >
        <div className="overlay">
          <h1>From Darkness to Light</h1>
          <p>Hope • Healing • Inner strength</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="stress-paragraph">
        <p>
          Depression is not weakness. It is a signal that the mind needs rest,
          compassion, and balance. When emotions are suppressed for long,
          energy becomes stagnant.
          <br /><br />
          Yoga, breathwork, and meditation gently uplift emotions,
          restore hope, and reconnect you with inner strength.
        </p>
      </section>

      {/* TRUTHS */}
      <section className="truths">
        <h2>Hidden Truths About Depression</h2>
        <div className="truth-grid">
          <div>
            <h4>Energy Is Blocked</h4>
            <p>Low energy leads to negative thoughts.</p>
          </div>
          <div>
            <h4>Breath Heals</h4>
            <p>Breathing regulates emotional chemistry.</p>
          </div>
          <div>
            <h4>Connection Matters</h4>
            <p>Silence and awareness heal deeply.</p>
          </div>
        </div>
      </section>

      {/* WATCH VIDEOS */}
      <section className="watch-videos">
        <h2>Watch the Related Videos for Depression</h2>
        <p className="section-sub">
          Practices for Emotional Healing and Mental Clarity.
        </p>

        <div className="video-grid">
          <div className="video-card" onClick={() => playVideo("2MJGg-dUKh0")}>
            <img src={balasana} alt="Balasana" />
            <span className="play-btn">▶</span>
            <p>Balasana</p>
          </div>

          <div className="video-card" onClick={() => playVideo("4J97THGPxoc")}>
            <img src={sukhasana} alt="Sukhasana" />
            <span className="play-btn">▶</span>
            <p>Sukhasana</p>
          </div>

          <div className="video-card" onClick={() => playVideo("fOdrW7nf9gw")}>
            <img src={bhujangasana} alt="Bhujangasana" />
            <span className="play-btn">▶</span>
            <p>Bhujangasana</p>
          </div>

          <div className="video-card" onClick={() => playVideo("hgtfNp8KywM")}>
            <img src={setuBandhasana} alt="Setu Bandhasana" />
            <span className="play-btn">▶</span>
            <p>Setu Bandhasana</p>
          </div>

          <div className="video-card" onClick={() => playVideo("82p0aGNJSF4")}>
            <img src={vajrasana} alt="Vajrasana" />
            <span className="play-btn">▶</span>
            <p>Vajrasana</p>
          </div>

          <div className="video-card" onClick={() => playVideo("dXYtWuYxWmQ")}>
            <img src={savasana} alt="Shavasana" />
            <span className="play-btn">▶</span>
            <p>Shavasana</p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="stress-quote">
        <blockquote>
          “When the mind feels heavy and life seems dark, remember that this is
          not the end — it is a pause. Through breath, awareness, and patience,
          the light within slowly returns.”
          <span>— Yogic Wisdom</span>
        </blockquote>
      </section>

      {/* SOLUTIONS */}
      <section className="stress-solutions">
        <h2>How to Heal from Depression Naturally?</h2>

        <div className="solution-grid">
          <div className="solution-card food">
            <div className="icon-circle">
              <img src={mindful} alt="Mindful Awareness" />
            </div>
            <h3>Mindful Awareness</h3>
            <p>
              Practicing mindful awareness helps you observe thoughts and emotions
              without fear or judgment.
            </p>
          </div>

          <div className="solution-card sleep">
            <div className="icon-circle">
              <img src={sleepImg} alt="Sleep" />
            </div>
            <h3>Rest & Quality Sleep</h3>
            <p>Deep and regular sleep restores emotional balance.</p>
          </div>

          <div className="solution-card breathwork">
            <div className="icon-circle">
              <img src={breathwork} alt="Breathwork" />
            </div>
            <h3>Conscious Breathing</h3>
            <p>Calms the nervous system and uplifts emotions.</p>
          </div>

          <div className="solution-card meditation">
            <div className="icon-circle">
              <img src={meditation} alt="Meditation" />
            </div>
            <h3>Meditation</h3>
            <p>Builds emotional strength and inner peace.</p>
          </div>
        </div>
      </section>

      {/* SUCCESS */}
      <section className="success-section refined">
        <h2 className="success-title">Healing Begins Inside</h2>
        <div className="success-grid refined-grid">
          <div className="success-card">
            <div className="success-icon">🌱</div>
            <h4>Hope</h4>
            <p>Restores positivity.</p>
          </div>
          <div className="success-card">
            <div className="success-icon">💙</div>
            <h4>Emotional Balance</h4>
            <p>Reduces heaviness.</p>
          </div>
          <div className="success-card">
            <div className="success-icon">🌞</div>
            <h4>Renewed Energy</h4>
            <p>Brings clarity.</p>
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
              title="Depression Video"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}