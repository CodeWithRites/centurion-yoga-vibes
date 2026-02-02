export default function Home() {
  return (
    <main className="home-page">

      {/* ================= HERO ================= */}
      <section className="hero">

        {/* SIDE IMAGES (DESKTOP ONLY) */}
        <img
          src="/src/assets/images/pose.png"
          alt="Yoga Pose"
          className="hero-side left desktop-only"
        />

        <div className="hero-content">
          <h1>Yoga for a Balanced Life</h1>

          <p className="tagline">
            करो योग, रहो निरोग <br />
            ଯୋଗ କରନ୍ତୁ, ନିରୋଗ ରୁହନ୍ତୁ
          </p>

          {/* MOBILE HERO IMAGE */}
          <img
            src="/src/assets/images/pose.png"
            alt="Yoga Pose"
            className="hero-mobile-image mobile-only"
          />

          <h3>If You Are Interested</h3>

          <div className="hero-buttons">
            <a className="btn primary">Join Online Class</a>
            <a className="btn secondary">Visit Offline Studio</a>
          </div>
        </div>

        <img
          src="/src/assets/images/pose.png"
          alt="Yoga Pose"
          className="hero-side right desktop-only"
        />
      </section>

      {/* ================= WHY ================= */}
      <section className="why">
        <h2>Why Centurion Yoga Vibes?</h2>

        <div className="why-grid">
          <div className="why-card">🧘 Online & Offline Classes</div>
          <div className="why-card">🌍 Multilingual Teaching</div>
          <div className="why-card">📜 Certified Instructor</div>
          <div className="why-card">🌿 Holistic Wellness</div>
        </div>
      </section>

      {/* ================= CLASSES ================= */}
      <section className="classes">
        <h2>Our Classes</h2>

        <div className="class-grid">
          <div className="class-card">🟢 Online Yoga</div>
          <div className="class-card">🔵 Offline Yoga</div>
          <div className="class-card">🟣 Meditation</div>
          <div className="class-card">🟠 Pranayama</div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
     {/* ================= TEAM ================= */}
<section className="team">
  <h2>Our Yoga & Media Team</h2>

  <div className="team-grid">
    <TeamCard
      name="Gyanendra Kumar Mishra"
      role="Yoga Trainer"
      image="/src/assets/images/gyana.jpeg"
    />

    <TeamCard
      name="Banita Sahoo"
      role="Assistant Yoga Trainer"
      image="/src/assets/images/banita.jpeg"
    />

    <TeamCard
      name="Priyanshu Pradhan"
      role="Assistant Yoga Trainer"
      image="/src/assets/images/priyanshu.jpeg"
    />

    <TeamCard
      name="Dwarikanath Satpathy"
      role="Assistant Yoga Trainer"
      image="/src/assets/images/dwarika.jpeg"
    />

    <TeamCard
      name="Ritesh Gouda"
      role="Media & IT Department"
      image="/src/assets/images/ritesh.jpg"
    />

    <TeamCard
      name="Bishnu Prasad Sahoo"
      role="Media & IT Department"
      image="/src/assets/images/bishnu.jpeg"
    />
  </div>
</section>

    </main>
  );
}


/* ================= TEAM CARD ================= */
function TeamCard({ name, role, image }) {
  return (
    <div className="team-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}