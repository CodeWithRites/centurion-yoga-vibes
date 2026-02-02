import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAuth, AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievements";
import Stress from "./pages/Stress";
import MentalHealth from "./pages/MentalHealth";
import WeightLoss from "./pages/WeightLoss";
import Depression from "./pages/Depression";
import Anger from "./pages/Anger";
import Sleep from "./pages/Sleep";
import Wellness from "./pages/Wellness";
import BackPain from "./pages/BackPain";

import Meditation from "./pages/meditation/MeditationOverview";
import MeditationBeginner from "./pages/meditation/MeditationBeginner";
import MeditationAdvanced from "./pages/meditation/MeditationAdvanced";
import MeditationChildren from "./pages/meditation/MeditationChildren";

import YogaOverview from "./pages/yoga/YogaOverview";
import YogaBeginner from "./pages/yoga/YogaBeginner";
import YogaAdvanced from "./pages/yoga/YogaAdvanced";
import Pranayama from "./pages/yoga/Pranayama";

import Login from "./pages/Login";
import Admin from "./pages/Admin";
import LoginHistory from "./pages/LoginHistory";
import ManagePages from "./pages/ManagePages";

/* =========================
   PROTECTED ROUTE
========================= */
const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { isAuthenticated, isAdmin, loading } = useAuth();

  if (loading) return null;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function AppRoutes() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const current = parseInt(localStorage.getItem("visitorCount") || "0");
    localStorage.setItem("visitorCount", (current + 1).toString());
  }, []);

  const enabledPages = JSON.parse(
    localStorage.getItem("adminPages") ||
      JSON.stringify({
        stress: true,
        "mental-health": true,
        "weight-loss": true,
        depression: true,
        anger: true,
        sleep: true,
        wellness: true,
        backpain: true,
        "yoga-overview": true,
        "yoga-beginner": true,
        "yoga-advanced": true,
        pranayama: true,
        "meditation-overview": true,
        "meditation-beginner": true,
        "meditation-advanced": true,
        "meditation-children": true,
        achievements: true,
        contact: true,
      })
  );

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* 🔑 THIS WRAPPER FIXES MOBILE SCROLL */}
      <main className="app-content">
        <Routes location={location}>
          {/* PUBLIC */}
          <Route path="/" element={<Home />} />

          {/* LOGIN */}
          <Route
            path="/login"
            element={
              isAuthenticated ? <Navigate to="/" replace /> : <Login />
            }
          />

          {/* USER ROUTES */}
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />

          {enabledPages.contact && (
            <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          )}

          {enabledPages.achievements && (
            <Route path="/achievements" element={<ProtectedRoute><Achievements /></ProtectedRoute>} />
          )}

          {enabledPages.stress && (
            <Route path="/stress" element={<ProtectedRoute><Stress /></ProtectedRoute>} />
          )}

          {enabledPages["mental-health"] && (
            <Route path="/mental-health" element={<ProtectedRoute><MentalHealth /></ProtectedRoute>} />
          )}

          {enabledPages["weight-loss"] && (
            <Route path="/weight-loss" element={<ProtectedRoute><WeightLoss /></ProtectedRoute>} />
          )}

          {enabledPages.depression && (
            <Route path="/depression" element={<ProtectedRoute><Depression /></ProtectedRoute>} />
          )}

          {enabledPages.anger && (
            <Route path="/anger" element={<ProtectedRoute><Anger /></ProtectedRoute>} />
          )}

          {enabledPages.sleep && (
            <Route path="/sleep" element={<ProtectedRoute><Sleep /></ProtectedRoute>} />
          )}

          {enabledPages.wellness && (
            <Route path="/wellness" element={<ProtectedRoute><Wellness /></ProtectedRoute>} />
          )}

          {enabledPages.backpain && (
            <Route path="/backpain" element={<ProtectedRoute><BackPain /></ProtectedRoute>} />
          )}

          {/* MEDITATION */}
          {enabledPages["meditation-overview"] && (
            <Route path="/meditation" element={<ProtectedRoute><Meditation /></ProtectedRoute>} />
          )}

          {enabledPages["meditation-beginner"] && (
            <Route path="/meditation-beginner" element={<ProtectedRoute><MeditationBeginner /></ProtectedRoute>} />
          )}

          {enabledPages["meditation-advanced"] && (
            <Route path="/meditation-advanced" element={<ProtectedRoute><MeditationAdvanced /></ProtectedRoute>} />
          )}

          {enabledPages["meditation-children"] && (
            <Route path="/meditation-children" element={<ProtectedRoute><MeditationChildren /></ProtectedRoute>} />
          )}

          {/* YOGA */}
          {enabledPages["yoga-overview"] && (
            <Route path="/yoga-overview" element={<ProtectedRoute><YogaOverview /></ProtectedRoute>} />
          )}

          {enabledPages["yoga-beginner"] && (
            <Route path="/yoga-beginner" element={<ProtectedRoute><YogaBeginner /></ProtectedRoute>} />
          )}

          {enabledPages["yoga-advanced"] && (
            <Route path="/yoga-advanced" element={<ProtectedRoute><YogaAdvanced /></ProtectedRoute>} />
          )}

          {enabledPages.pranayama && (
            <Route path="/pranayama" element={<ProtectedRoute><Pranayama /></ProtectedRoute>} />
          )}

          {/* ADMIN */}
          <Route path="/admin" element={<ProtectedRoute adminOnly><Admin /></ProtectedRoute>} />
          <Route path="/login-history" element={<ProtectedRoute adminOnly><LoginHistory /></ProtectedRoute>} />
          <Route path="/manage-pages" element={<ProtectedRoute adminOnly><ManagePages /></ProtectedRoute>} />

          {/* FALLBACK */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

/* =========================
   ROOT APP
========================= */
export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}