import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
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
      const user = await adminLogin(email, password);

      // 🔥 STORE ADMIN LOGIN HISTORY
      await addDoc(collection(db, "loginHistory"), {
        uid: user.uid,
        email: user.email,
        role: "admin",
        loginTime: serverTimestamp(),
      });

      navigate("/admin");
    } catch (err) {
      console.error("ADMIN LOGIN ERROR:", err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     GOOGLE USER LOGIN
  ========================= */
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      const userCredential = await userGoogleLogin();
      const user = userCredential.user;

      // 🔥 STORE USER LOGIN HISTORY
      await addDoc(collection(db, "loginHistory"), {
        uid: user.uid,
        email: user.email,
        role: "user",
        loginTime: serverTimestamp(),
      });

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

        <button
          className="close-btn"
          onClick={() => navigate("/")}
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