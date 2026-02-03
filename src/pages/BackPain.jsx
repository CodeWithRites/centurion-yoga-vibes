import { useState } from "react";

/* ================= IMAGE IMPORTS (DEPLOY SAFE) ================= */
import backpainHero from "../assets/images/Backpain.png";
import bhujangasana from "../assets/images/Bhujangasana.png";
import catcow from "../assets/images/Cat-cow stretch.png";
import balasana from "../assets/images/Balasana.png";
import setuBandhasana from "../assets/images/SetuBandhasna.png";
import healthy from "../assets/images/healthy.png";
import sleepImg from "../assets/images/sleep.png";
import breathwork from "../assets/images/breathwork.png";
import meditation from "../assets/images/meditation.png";

export default function Backpain() {
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
            url(${backpainHero})
          `,
        }}
      >
        <div className="overlay">
          <h1>Healthy Spine = Healthy Life</h1>
          <p>Strength • Flexibility • Pain-free movement</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="stress-paragraph">
        <p>
          Back pain is one of the most common lifestyle problems today, caused by
          long sitting hours, poor posture, stress, and lack of movement.
          <br /><br />
          Yoga offers a natural and holistic approach to relieve back pain by
          strengthening muscles, improving posture, increasing flexibility,
          and calming the nervous system.
        </p>
      </section>

      {/* TRUTHS */}
      <section className="truths">
        <h2>Hidden Truths About Back Pain</h2>
        <div className="truth-grid">
          <div>
            <h4>Poor Posture Is a Major Cause</h4>
            <p>Incorrect sitting and standing habits strain the spine.</p>
          </div>
          <div>
            <h4>Stress Tightens Muscles</h4>
            <p>Mental stress creates stiffness and chronic back tension.</p>
          </div>
          <div>
            <h4>Movement Heals</h4>
            <p>Gentle daily movement keeps the spine healthy and flexible.</p>
          </div>
        </div>
      </section>

      {/* WATCH VIDEOS */}
      <section className="watch-videos">
        <h2>Watch the Related Videos for Back Pain Relief</h2>
        <p className="section-sub">
          Gentle yoga practices to strengthen and relax the spine.
        </p>

        <div className="video-grid">

          <div className="video-card" onClick={() => playVideo("fOdrW7nf9gw")}>
            <img src={bhujangasana} alt="Bhujangasana" />
            <span className="play-btn">▶</span>
            <p>Bhujangasana (Cobra Pose)</p>
          </div>

          <div className="video-card" onClick={() => playVideo("vuyUwtHl694")}>
            <img src={catcow} alt="Cat–Cow stretch" />
            <span className="play-btn">▶</span>
            <p>Cat–Cow Stretch</p>
          </div>

          <div className="video-card" onClick={() => playVideo("2MJGg-dUKh0")}>
            <img src={balasana} alt="Balasana" />
            <span className="play-btn">▶</span>
            <p>Balasana (Child’s Pose)</p>
          </div>

          <div className="video-card" onClick={() => playVideo("hgtfNp8KywM")}>
            <img src={setuBandhasana} alt="Setu Bandhasana" />
            <span className="play-btn">▶</span>
            <p>Setu Bandhasana (Bridge Pose)</p>
          </div>

        </div>
      </section>

      {/* QUOTE */}
      <section className="stress-quote">
        <blockquote>
          When the spine is aligned, the body moves with ease and grace.
          <span>— Yogic Wisdom</span>
        </blockquote>
      </section>

      {/* SOLUTIONS */}
      <section className="stress-solutions">
        <h2>How to Heal Back Pain Naturally?</h2>
        <p className="section-sub">
          Small daily habits protect and strengthen the spine.
        </p>

        <div className="solution-grid">

          <div className="solution-card food">
            <div className="icon-circle">
              <img src={healthy} alt="Healthy Diet" />
            </div>
            <h3>Balanced Nutrition</h3>
            <p>Supports muscle recovery and bone health.</p>
          </div>

          <div className="solution-card sleep">
            <div className="icon-circle">
              <img src={sleepImg} alt="Sleep" />
            </div>
            <h3>Proper Sleep Posture</h3>
            <p>Allows the spine to rest and heal overnight.</p>
          </div>

          <div className="solution-card breathwork">
            <div className="icon-circle">
              <img src={breathwork} alt="Pranayama" />
            </div>
            <h3>Relaxed Breathing</h3>
            <p>Reduces muscle tension and pain perception.</p>
          </div>

          <div className="solution-card meditation">
            <div className="icon-circle">
              <img src={meditation} alt="Meditation" />
            </div>
            <h3>Meditation</h3>
            <p>Calms the nervous system and supports healing.</p>
          </div>

        </div>
      </section>

      {/* SUCCESS */}
      <section className="success-section refined">
        <h2 className="success-title">Strong Spine, Confident Life</h2>

        <div className="success-grid refined-grid">
          <div className="success-card">
            <div className="success-icon">🦴</div>
            <h4>Improved Posture</h4>
            <p>Aligns the spine and reduces strain.</p>
          </div>
          <div className="success-card">
            <div className="success-icon">🧘</div>
            <h4>Flexible Body</h4>
            <p>Increases mobility and ease of movement.</p>
          </div>
          <div className="success-card">
            <div className="success-icon">🌿</div>
            <h4>Pain-Free Living</h4>
            <p>Supports long-term spinal health naturally.</p>
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