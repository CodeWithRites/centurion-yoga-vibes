import { useState, useEffect } from "react";
import "./admin.css";

export default function Admin() {
  useEffect(() => {
    // Admin dashboard - no specific data loading needed
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="admin-container">
        <div className="admin-header">
          <h1>🛠️ Admin Dashboard</h1>
          <p>Manage Your Centurion Yoga Vibes Platform - Control Content, Monitor Users, Track Achievements</p>
        </div>

        <div className="admin-content">
          {/* STATS SECTION */}
          <section className="stats-section">
            <h2>📊 Platform Overview</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>✅</h3>
                <p>Admin Access</p>
              </div>
              <div className="stat-card">
                <h3>🚀</h3>
                <p>Status</p>
              </div>
              <div className="stat-card">
                <h3>4</h3>
                <p>Admin Tools</p>
              </div>
              <div className="stat-card">
                <h3>🛠️</h3>
                <p>Dashboard</p>
              </div>
            </div>
          </section>

          {/* QUICK LINKS */}
          <section className="pages-section">
            <div className="section-header">
              <h2>🔗 Quick Access</h2>
            </div>
            <div className="quick-links-grid">
              <a href="/login-history" className="quick-link-card">
                <div className="link-icon">📋</div>
                <h3>Login History</h3>
                <p>Monitor user login activities and access patterns</p>
              </a>
              <a href="/manage-pages" className="quick-link-card">
                <div className="link-icon">🧘</div>
                <h3>Manage Pages</h3>
                <p>Control which pages are visible to users</p>
              </a>
          
              <div className="quick-link-card status-card">
                <div className="link-icon">📊</div>
                <h3>System Status</h3>
                <p>All systems operational</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
