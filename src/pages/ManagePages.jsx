import { useState, useEffect } from "react";
import "../styles/ManagePages.css";

const DEFAULT_PAGES = {
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
};

export default function ManagePages() {
  const [pages, setPages] = useState(DEFAULT_PAGES);
  const [stats, setStats] = useState({
    total: 0,
    enabled: 0,
    disabled: 0,
  });

  // LOAD FROM LOCAL STORAGE
  useEffect(() => {
    const saved = localStorage.getItem("adminPages");
    const data = saved ? JSON.parse(saved) : DEFAULT_PAGES;
    setPages(data);
    updateStats(data);
  }, []);

  const updateStats = (data) => {
    const total = Object.keys(data).length;
    const enabled = Object.values(data).filter(Boolean).length;
    setStats({
      total,
      enabled,
      disabled: total - enabled,
    });
  };

  const togglePage = (key) => {
    const updated = { ...pages, [key]: !pages[key] };
    setPages(updated);
    localStorage.setItem("adminPages", JSON.stringify(updated));
    updateStats(updated);
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-container">
        <div className="admin-header">
          <h1>🧘 Manage Pages</h1>
          <p>Enable or disable pages instantly (affects user navigation)</p>
        </div>

        <div className="admin-content">
          {/* STATS */}
          <section className="stats-section">
            <div className="stats-grid">
              <div className="stat-card">
                <h3>{stats.total}</h3>
                <p>Total Pages</p>
              </div>
              <div className="stat-card">
                <h3>{stats.enabled}</h3>
                <p>Enabled</p>
              </div>
              <div className="stat-card">
                <h3>{stats.disabled}</h3>
                <p>Disabled</p>
              </div>
            </div>
          </section>

          {/* ALL PAGES – SINGLE LIST */}
          <section className="pages-section">
            <div className="section-header">
              <h2>📄 All Pages</h2>
            </div>

            <div className="pages-grid">
              {Object.keys(pages).map((page) => (
                <div
                  key={page}
                  className={`page-item ${pages[page] ? "active" : ""}`}
                  onClick={() => togglePage(page)}
                >
                  <input
                    type="checkbox"
                    checked={pages[page]}
                    readOnly
                    className="page-checkbox"
                  />
                  <div className="page-info">
                    <h3 className="page-name">
                      {page.replace(/-/g, " ").toUpperCase()}
                    </h3>
                    <span
                      className={`page-status ${
                        pages[page] ? "enabled" : "disabled"
                      }`}
                    >
                      {pages[page] ? "✅ Enabled" : "❌ Disabled"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
