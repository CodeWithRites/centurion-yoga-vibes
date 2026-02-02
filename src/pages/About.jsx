export default function About() {
  return (
    <>
      {/* ABOUT HERO */}


      <section className="about-hero compact">
  <div className="about-overlay"></div>

  <div className="about-content">
    <h1 className="about-title">About Centurion Yoga Vibes</h1>
    <p className="about-sub">Yoga for a Balanced Life</p>

    <div className="about-logos">
      <img src="src/assets/images/CenturionYoga.png" alt="Centurion Yoga Vibes" />
      <img src="src/assets/images/cutmlogo.png" alt="Centurion University" />
    </div>
  </div>
</section>



      {/* ABOUT CONTENT */}
      <section className="about-section">
        <h2>About Centurion Yoga Vibes</h2>

        <p>
          <strong>Centurion Yoga Vibes</strong> is more than a yoga center —
          it is a journey towards balanced living.
        </p>

        <p>
          Founded with deep respect for India’s ancient yogic traditions,
          Centurion Yoga Vibes was created to help individuals reconnect with their
          inner self in today’s fast-paced world. We believe that true health
          is achieved when the <strong>mind, body, and soul</strong> work in harmony.
        </p>

        <p>
          At Centurion Yoga Vibes, we combine traditional yoga practices with a modern,
          inclusive approach. Our programs are designed for people of all ages
          and fitness levels, making yoga simple, accessible, and meaningful
          for everyone. Whether you join us online or offline, every session
          is guided with care, discipline, and purpose.
        </p>

        <p>
          We emphasize not only physical postures <em>(asanas)</em> but also
          breath control <em>(pranayama)</em>, meditation, mindfulness, and
          yogic wisdom. Our aim is to help individuals manage stress, improve
          mental clarity, build physical strength, and cultivate inner peace.
        </p>

        <p>
          With multilingual teaching in <strong>English, Hindi, and Odia</strong>,
          Centurion Yoga Vibes ensures that language is never a barrier to learning
          and growth. Our experienced instructors focus on personal guidance,
          correct techniques, and holistic wellness rather than quick results.
        </p>
      </section>

      {/* VALUES */}
      <section className="about-section">
        <h2>What Centurion Yoga Vibes Stands For</h2>

        <ul className="about-list">
          <li>🌿 <strong>Balance over pressure</strong></li>
          <li>🧘 <strong>Discipline over shortcuts</strong></li>
          <li>🕊️ <strong>Awareness over routine</strong></li>
        </ul>

        <p style={{ marginTop: "30px" }}>
          We invite you to begin your journey with us —
          a journey toward health, harmony, and a meaningful life.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="about-grid">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To spread authentic yoga education that empowers individuals
            to lead a healthy, disciplined, and mindful life —
            physically, mentally, and spiritually.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            To build a strong and conscious community where yoga becomes
            a way of life, promoting wellness, compassion, and
            self-awareness across society.
          </p>
        </div>
      </section>
    </>
  );
}
