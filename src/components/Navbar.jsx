import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/images/CenturionYoga.png";
import "../styles/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { user, logout } = useAuth();
  const isAuthenticated = !!user;
  const isAdmin = user?.role === "admin";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  const autoHideTimer = useRef(null);

  /* AUTO SHOW PROFILE FOR 5s AFTER LOGIN */
  useEffect(() => {
    if (isAuthenticated) {
      setShowProfile(true);
      autoHideTimer.current = setTimeout(() => {
        setShowProfile(false);
      }, 5000);
    }
    return () => clearTimeout(autoHideTimer.current);
  }, [isAuthenticated]);

  /* CLOSE ON ROUTE CHANGE */
  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdown(null);
    document.body.style.overflow = "auto";
  }, [location.pathname]);

  /* BODY SCROLL LOCK */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  const toggleProfile = () => {
    clearTimeout(autoHideTimer.current);
    setShowProfile(prev => !prev);
  };

  return (
    <header className="navbar">
      {/* LOGO */}
      <div className="nav-left" onClick={() => navigate("/")}>
        <img src={logo} alt="Centurion Yoga Vibes" />
        <span>Centurion Yoga Vibes</span>
      </div>

      {/* ================= DESKTOP NAV ================= */}
      <nav className="desktop-nav">
        {isAdmin ? (
          <>
            <Link to="/admin">Dashboard</Link>
            <Link to="/manage-pages">Manage Pages</Link>
            <Link to="/login-history">Login History</Link>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

            <div className="nav-dropdown">
              <span>Find a Solution ▾</span>
              <div className="dropdown-menu">
                <Link to="/stress">Stress</Link>
                <Link to="/mental-health">Mental Health</Link>
                <Link to="/weight-loss">Weight Loss</Link>
                <Link to="/depression">Depression</Link>
                <Link to="/anger">Anger</Link>
                <Link to="/sleep">Sleep</Link>
                <Link to="/wellness">Wellness</Link>
                <Link to="/backpain">Back Pain</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <span>Yoga ▾</span>
              <div className="dropdown-menu">
                <Link to="/yoga-overview">Overview</Link>
                <Link to="/yoga-beginner">Beginner</Link>
                <Link to="/yoga-advanced">Advanced</Link>
                <Link to="/pranayama">Pranayama</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <span>Meditation ▾</span>
              <div className="dropdown-menu">
                <Link to="/meditation">Overview</Link>
                <Link to="/meditation-beginner">Beginner</Link>
                <Link to="/meditation-advanced">Advanced</Link>
                <Link to="/meditation-children">Children</Link>
              </div>
            </div>

            <Link to="/achievements">Achievements</Link>
            <Link to="/contact">Contact</Link>
          </>
        )}
      </nav>

      {/* ================= RIGHT ================= */}
      <div className="nav-right">
        {!isAuthenticated ? (
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        ) : (
          <>
            <div className="profile-icon" onClick={toggleProfile}>👤</div>

            <div className={`profile-panel ${showProfile ? "active" : ""}`}>
              <button className="profile-close" onClick={() => setShowProfile(false)}>✕</button>
              <p className="profile-email">{user.email}</p>
              {isAdmin && <span className="profile-badge">ADMIN</span>}
              <button className="logout-btn" onClick={logout}>Logout</button>
            </div>
          </>
        )}

        <div className="hamburger" onClick={() => setMobileOpen(true)}>☰</div>
      </div>

      {/* ================= MOBILE ================= */}
      {mobileOpen && <div className="mobile-backdrop" onClick={closeMobile} />}

      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        <button className="mobile-close" onClick={closeMobile}>✕</button>

        {isAdmin ? (
          <>
            <Link to="/admin" onClick={closeMobile}>Dashboard</Link>
            <Link to="/manage-pages" onClick={closeMobile}>Manage Pages</Link>
            <Link to="/login-history" onClick={closeMobile}>Login History</Link>
          </>
        ) : (
          <>
            <Link to="/" onClick={closeMobile}>Home</Link>
            <Link to="/about" onClick={closeMobile}>About</Link>
            <Link to="/achievements" onClick={closeMobile}>Achievements</Link>
            <Link to="/contact" onClick={closeMobile}>Contact</Link>
          </>
        )}
      </div>
    </header>
  );
}