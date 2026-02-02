import { useEffect, useState } from "react";
import "../styles/LoginHistory.css";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import LoginAnalytics from "../admin/LoginAnalytics";

const PAGE_SIZE = 10;
const ADMIN_EMAILS = ["admin@centurionyogavibes.com"];

export default function LoginHistory() {
  const [rawData, setRawData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [filterRange, setFilterRange] = useState("all");
  const [showAdmins, setShowAdmins] = useState(false);

  const [lastDoc, setLastDoc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  /* =========================
     FETCH LOGIN HISTORY
  ========================= */
  const fetchLoginHistory = async (loadMore = false) => {
    if (loading || (!hasMore && loadMore)) return;
    setLoading(true);

    try {
      let q = query(
        collection(db, "loginHistory"),
        orderBy("loginTime", "desc"),
        limit(PAGE_SIZE)
      );

      if (loadMore && lastDoc) {
        q = query(
          collection(db, "loginHistory"),
          orderBy("loginTime", "desc"),
          startAfter(lastDoc),
          limit(PAGE_SIZE)
        );
      }

      const snap = await getDocs(q);

      const docs = snap.docs.map(d => ({
        id: d.id,
        ...d.data(),
      }));

      setRawData(prev => (loadMore ? [...prev, ...docs] : docs));
      setLastDoc(snap.docs[snap.docs.length - 1] || null);
      setHasMore(snap.docs.length === PAGE_SIZE);
    } catch (err) {
      console.error("Firestore fetch error:", err);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchLoginHistory();
  }, []);

  /* =========================
     FILTER + ADMIN TOGGLE
  ========================= */
  useEffect(() => {
    let data = [...rawData];

    // 👤 USER / ADMIN FILTER
    if (!showAdmins) {
      data = data.filter(d => !ADMIN_EMAILS.includes(d.email));
    }

    // 📅 DATE FILTER
    if (filterRange !== "all") {
      const now = new Date();
      const days = filterRange === "today" ? 0 : Number(filterRange);

      const from = new Date();
      from.setDate(now.getDate() - days);
      from.setHours(0, 0, 0, 0);

      data = data.filter(d => d.loginTime?.toDate() >= from);
    }

    setVisibleData(data);
  }, [rawData, filterRange, showAdmins]);

  const formatDate = ts =>
    ts?.toDate().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const formatTime = ts =>
    ts?.toDate().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  return (
    <div className="admin-dashboard">
      <div className="admin-container">
        <h1>📋 Login History</h1>
        <p>Realtime Firebase Authentication logs</p>

        {/* STATS */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>{visibleData.length}</h3>
            <p>Visible Records</p>
          </div>
          <div className="stat-card">
            <h3>{new Set(visibleData.map(e => e.email)).size}</h3>
            <p>Unique Users</p>
          </div>
          <div className="stat-card">
            <h3>
              {
                visibleData.filter(
                  e =>
                    e.loginTime?.toDate().toDateString() ===
                    new Date().toDateString()
                ).length
              }
            </h3>
            <p>Today</p>
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="filter-bar">
          <label>Filter by:</label>
          <select
            value={filterRange}
            onChange={e => setFilterRange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="today">Today</option>
            <option value="7">Last 7 Days</option>
            <option value="10">Last 10 Days</option>
            <option value="30">Last 30 Days</option>
          </select>

          <label style={{ marginLeft: 20 }}>
            <input
              type="checkbox"
              checked={showAdmins}
              onChange={e => setShowAdmins(e.target.checked)}
            />{" "}
            Show Admin Logins
          </label>
        </div>

        {/* TABLE */}
        <div className="table-wrapper">
          {visibleData.length ? (
            <table className="login-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {visibleData.map((e, i) => (
                  <tr key={e.id}>
                    <td>{i + 1}</td>
                    <td>{e.email}</td>
                    <td>{formatDate(e.loginTime)}</td>
                    <td>{formatTime(e.loginTime)}</td>
                    <td>
                      <span className="status-active">
                        {ADMIN_EMAILS.includes(e.email) ? "Admin" : "User"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no-data">No records found</p>
          )}
        </div>

        {/* LOAD MORE */}
        {hasMore && (
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <button
              className="add-btn"
              onClick={() => fetchLoginHistory(true)}
              disabled={loading}
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          </div>
        )}

        {/* ANALYTICS */}
        <LoginAnalytics data={visibleData} />
      </div>
    </div>
  );
}
