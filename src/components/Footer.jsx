import { Link } from "react-router-dom";
import logo from "../assets/images/CenturionYoga.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-box">
          <div className="footer-brand">
            <img
              src={logo}
              alt="CENTURION YOGA VIBES Logo"
            />
            <h5>CENTURION YOGA VIBES</h5>
          </div>

          <p className="footer-text">
            Yoga for a Balanced Life.<br />
            Empowering body, mind & soul through traditional yoga practices.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-box">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="#">Classes</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* CLASSES */}
        <div className="footer-box">
          <h4>Our Classes</h4>
          <ul>
            <li>Online Yoga</li>
            <li>Offline Yoga</li>
            <li>Meditation</li>
            <li>Pranayama</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-box">
          <h4>Contact</h4>
          <p>📍 Odisha, India</p>
          <p>📞 +91 78548 51486</p>
          <p>📧 centurionyogavibes@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 CENTURION YOGA VIBES • All Rights Reserved</p>
      </div>
    </footer>
  );
}