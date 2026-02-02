export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section
        className="mental-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,47,36,0.6), rgba(15,47,36,0.6)), url('src/assets/images/cutm.jpg')",
        }}
      >
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>We are here to support your wellness journey</p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="stress-paragraph">
        <p>
          Whether you have questions about yoga programs, meditation sessions,
          corporate wellness, or personal guidance — we are happy to help.
          <br />
          <br />
          Reach out to us anytime and take the first step towards a balanced
          and peaceful life.
        </p>
      </section>

      {/* CONTACT GRID */}
      <section className="stress-solutions">
        <h2>Get in Touch</h2>
        <p className="section-sub">We usually respond within 24 hours</p>

        <div className="solution-grid">
          <div className="solution-card food">
            <h3>📍 Address</h3>
            <p>
              Centurion University Of Technology & Management
              <br />
              Jatani, Bhubaneswar, Odisha
              <br />
              India
            </p>
          </div>

          <div className="solution-card sleep">
            <h3>📞 Phone</h3>
            <p>+91 78548 51486</p>
          </div>

          <div className="solution-card breathwork">
            <h3>📧 Email</h3>
            <p>centurionyogavibes@gmail.com</p>
          </div>

          <div className="solution-card meditation">
            <h3>🕒 Working Hours</h3>
            <p>
              Monday – Saturday
              <br />
              6:00 AM – 8:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="stress-solutions">
        <h2>Find Us on Map</h2>
        <p className="section-sub">Visit our yoga center</p>

        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps?q=Centurion%20University%20of%20Technology%20and%20Management,%20Jatani,%20Bhubaneswar&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jeevitam Yoga Location"
          ></iframe>
        </div>
      </section>

      {/* CONNECT WITH US */}
      <section className="connect-section">
        <h2>Connect With Us</h2>
        <p className="section-sub">
          Follow us for daily yoga & wellness inspiration
        </p>

        <div className="connect-icons">

          <a
            href="https://chat.whatsapp.com/KrJsHe12Ga5CSDD1N5az4R?mode=gi_t"
            target="_blank"
            rel="noreferrer"
            className="connect-item"
          >
            <img src="src/assets/images/whatsapp.png" alt="WhatsApp" />
            <span>WhatsApp</span>
          </a>

          <a
            href="mailto:jeevitam.yoga@gmail.com"
            className="connect-item"
          >
            <img src="src/assets/images/gmail.png" alt="Gmail" />
            <span>Email</span>
          </a>
        </div>
      </section>

      {/* QUOTE */}
      <section className="stress-quote">
        <blockquote>
          When you take one step toward wellness, life takes ten steps toward you.
          <br />
          <span>— Centurion Yoga Vibes —</span>
        </blockquote>
      </section>
    </>
  );
}
