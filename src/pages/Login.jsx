import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

const ADMIN_EMAIL = "admin@centurionyogavibes.com";

export default function Login() {
  const navigate = useNavigate();
  const { adminLogin, userGoogleLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminMode, setAdminMode] = useState(false);
  const [loading, setLoading] = useState(false);

  /* =========================
     ADMIN LOGIN
  ========================= */
  const handleAdminLogin = async () => {
    if (email !== ADMIN_EMAIL) {
      alert("❌ Unauthorized admin email");
      return;
    }

    if (!password) {
      alert("❌ Password required");
      return;
    }

    try {
      setLoading(true);
      await adminLogin(email, password);
      navigate("/admin");
    } catch (err) {
      console.error("ADMIN LOGIN ERROR:", err);

      if (err.code === "auth/user-not-found") {
        alert("❌ Admin user not found");
      } else if (err.code === "auth/wrong-password") {
        alert("❌ Wrong password");
      } else if (err.code === "auth/operation-not-allowed") {
        alert("❌ Email/Password auth disabled in Firebase");
      } else {
        alert(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     GOOGLE LOGIN
  ========================= */
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await userGoogleLogin();
      navigate("/");
    } catch (err) {
      console.error("GOOGLE LOGIN ERROR:", err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">

        {/* ❌ CLOSE BUTTON */}
        <button
          className="close-btn"
          onClick={() => navigate("/")}
          aria-label="Close login"
        >
          ✕
        </button>

        <h2>Welcome to</h2>
        <h1>Centurion Yoga Vibes</h1>

        <p className="subtitle">
          {adminMode
            ? "Admin access only"
            : "Login to continue your wellness journey"}
        </p>

        {/* ================= ADMIN MODE ================= */}
        {adminMode && (
          <>
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="primary-btn"
              onClick={handleAdminLogin}
              disabled={loading}
            >
              {loading ? "Signing in..." : "Admin Login"}
            </button>
          </>
        )}

        {/* ================= USER MODE ================= */}
        {!adminMode && (
          <button
            className="google-btn"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
            />
            Continue with Google
          </button>
        )}

        <div className="divider" />

        <button
          className="link-btn"
          onClick={() => setAdminMode(!adminMode)}
          disabled={loading}
        >
          {adminMode ? "← Back to user login" : "Admin login?"}
        </button>
      </div>
    </div>
  );
}