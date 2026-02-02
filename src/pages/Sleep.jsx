import { useState } from "react";

export default function Sleep() {
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
            url('src/assets/images/Sleep.png')
          `,
        }}
      >
        <div className="overlay">
          <h1>Deep Sleep, Deep Healing</h1>
          <p>Rest • Repair • Rejuvenation</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="stress-paragraph">
        <p>
          Sleep is the body’s natural medicine.
          Disturbed sleep is often caused by mental overload.
          <br /><br />
          Yogic relaxation and breathing prepare the nervous system
          for deep and restful sleep.
        </p>
      </section>

{/* WATCH VIDEOS */}
<section className="watch-videos">
  <h2>Yoga & Meditation for Better Sleep</h2>
  <p className="section-sub">
    Practices for Emotional Healing and Mental Clarity.
  </p>

  <div className="video-grid">

    <div className="video-card" onClick={() => playVideo('dXYtWuYxWmQ')}>
      <img src="src/assets/images/Savasana.png" alt="Shavasana" />
      <span className="play-btn">▶</span>
      <p>Shavasana (Corpse Pose)</p>
    </div>

    <div className="video-card" onClick={() => playVideo('dQkBuNWxZK4')}>
      <img src="src/assets/images/Supta badha Konasana.png" alt="Supta Baddha Konasana" />
      <span className="play-btn">▶</span>
      <p>Supta Baddha Konasana</p>
    </div>

    <div className="video-card" onClick={() => playVideo('WklJNYaayP8')}>
      <img src="src/assets/images/Uttanasana.png" alt="Uttanasana" />
      <span className="play-btn">▶</span>
      <p>Uttanasana (Standing Forward Bend)</p>
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

    <div className="video-card" onClick={() => playVideo('zpVVxgSx2lk')}>
      <img src="src/assets/images/Yoga Nidra.png" alt="Yoga Nidra" />
      <span className="play-btn">▶</span>
      <p>Yoga Nidra</p>
    </div>

  </div>
</section>

        {/* QUOTE */}
      <section className="stress-quote">
        <blockquote>
          “Sleep is the golden chain that binds health and our bodies together.
When the mind rests, the body heals, and when the body heals, life flows with ease.”<br /><br />
          <span>— Thomas Dekker</span>
        </blockquote>
      </section>

      {/* SOLUTIONS */}
      <section className="stress-solutions">
        <h2>How to Restore Natural Sleep?</h2>
        <p className="section-sub">
          A calm mind invites deep rest.
        </p>

        <div className="solution-grid">
          <div className="solution-card food">
            <div className="icon-circle">
              <img src="src/assets/images/sleep.png" alt="Relaxation" />
            </div>
            <h3>Mental Relaxation</h3>
            <p>
              An overactive mind is the biggest barrier to sleep.
              Relaxation practices slow racing thoughts
              and gently invite rest.
            </p>
          </div>

          <div className="solution-card sleep">
            <div className="icon-circle">
              <img src="src/assets/images/breathwork.png" alt="Breathing" />
            </div>
            <h3>Breath & Rhythm</h3>
            <p>
              Slow breathing activates the relaxation response,
              lowers heart rate, and releases daily stress.
            </p>
          </div>

          <div className="solution-card breathwork">
            <div className="icon-circle">
              <img src="src/assets/images/mindfull.png" alt="Awareness" />
            </div>
            <h3>Body Awareness</h3>
            <p>
              Gentle body awareness releases physical tension
              and bridges wakefulness and deep sleep.
            </p>
          </div>

          <div className="solution-card meditation">
            <div className="icon-circle">
              <img src="src/assets/images/meditation.png" alt="Meditation" />
            </div>
            <h3>Night Meditation</h3>
            <p>
              Short guided meditation clears mental clutter
              and trains the mind to associate bedtime with peace.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="stress-quote">
        <blockquote>
          “Sleep is the golden chain that binds health and our bodies together.
          When the mind rests, the body heals, and life flows with ease.”
          <br /><br />
          <span>— Thomas Dekker</span>
        </blockquote>
      </section>

      {/* BENEFITS */}
      <section className="success-section refined">
        <h2 className="success-title">Benefits of Quality Sleep</h2>
        <div className="success-grid refined-grid">
          <div className="success-card">
            <div className="success-icon">🌙</div>
            <h4>Calm Mind</h4>
          </div>
          <div className="success-card">
            <div className="success-icon">💤</div>
            <h4>Deep Rest</h4>
          </div>
          <div className="success-card">
            <div className="success-icon">🔋</div>
            <h4>High Energy</h4>
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
