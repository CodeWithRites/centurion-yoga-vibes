import { useState } from "react";

export default function Anger() {
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
            url('src/assets/images/Anger.png')
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
  <p className="section-sub">
    Practices for Emotional Healing and Mental Clarity.
  </p>

  <div className="video-grid">

    <div className="video-card" onClick={() => playVideo('2MJGg-dUKh0')}>
      <img src="src/assets/images/Balasana.png" alt="Balasana" />
      <span className="play-btn">▶</span>
      <p>Balasana (Child’s Pose)</p>
    </div>

    <div className="video-card" onClick={() => playVideo('T8sgVyF4Ux4')}>
      <img src="src/assets/images/Paschimottanasana.png" alt="Paschimottanasana" />
      <span className="play-btn">▶</span>
      <p>Paschimottanasana (Seated Forward Bend)</p>
    </div>

    <div className="video-card" onClick={() => playVideo('wJpyMgbxytU')}>
      <img src="src/assets/images/Ardha Matsyendrasana.png" alt="Ardha Matsyendrasana" />
      <span className="play-btn">▶</span>
      <p>Ardha Matsyendrasana (Spinal Twist)</p>
    </div>

    <div className="video-card" onClick={() => playVideo('yqhZfUXgVbk')}>
      <img src="src/assets/images/Sheetali.png" alt="Sheetali" />
      <span className="play-btn">▶</span>
      <p>Sheetali Pranayama</p>
    </div>

    <div className="video-card" onClick={() => playVideo('ZwEdfOuhoY4')}>
      <img src="src/assets/images/Ujjayi.png" alt="Ujjayi" />
      <span className="play-btn">▶</span>
      <p>Ujjayi Pranayama</p>
    </div>

    <div className="video-card" onClick={() => playVideo('hgtfNp8KywM')}>
      <img src="src/assets/images/SetuBandhasna.png" alt="Setu Bandhasana" />
      <span className="play-btn">▶</span>
      <p>Setu Bandhasana (Bridge Pose)</p>
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
        <p className="section-sub">
          Small lifestyle changes create powerful results.
        </p>

        <div className="solution-grid">
          <div className="solution-card food">
            <div className="icon-circle">
              <img src="src/assets/images/exercise.png" alt="Exercise" />
            </div>
            <h3>Exercise</h3>
            <p>
              Physical activity releases excess rajas from the body.
              Yoga and Sun Salutations exhaust negative energy,
              leaving no fuel for anger.
            </p>
          </div>

          <div className="solution-card sleep">
            <div className="icon-circle">
              <img src="src/assets/images/breathwork.png" alt="Breathing" />
            </div>
            <h3>Breathe and Meditate</h3>
            <p>
              Deep breathing and regular meditation calm the mind
              and strengthen emotional control.
            </p>
          </div>

          <div className="solution-card breathwork">
            <div className="icon-circle">
              <img src="src/assets/images/vision.png" alt="Perspective" />
            </div>
            <h3>Broaden Your Vision</h3>
            <p>
              Accept imperfections in people and situations.
              Let go of “I am right” and cultivate patience.
            </p>
          </div>

          <div className="solution-card meditation">
            <div className="icon-circle">
              <img src="src/assets/images/healthy.png" alt="Food" />
            </div>
            <h3>Watch Your Food</h3>
            <p>
              Pitta imbalance fuels anger.
              Eat on time, avoid excessive spice,
              and maintain digestive balance.
            </p>
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
