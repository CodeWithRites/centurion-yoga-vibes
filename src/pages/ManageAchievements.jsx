import { useEffect, useState } from "react";
import "../styles/ManageAchievements.css";
import { db, storage } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

export default function ManageAchievements() {
  const [achievements, setAchievements] = useState([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔥 LOAD ACHIEVEMENTS FROM FIRESTORE
  const fetchAchievements = async () => {
    const q = query(
      collection(db, "achievements"),
      orderBy("createdAt", "desc")
    );
    const snap = await getDocs(q);

    setAchievements(
      snap.docs.map(d => ({
        id: d.id,
        ...d.data(),
      }))
    );
  };

  useEffect(() => {
    fetchAchievements();
  }, []);

  // 📸 IMAGE PREVIEW
  const handleImageChange = e => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // ➕ ADD ACHIEVEMENT (STORAGE + FIRESTORE)
  const addAchievement = async () => {
    if (!title || !image) {
      alert("Title and image required");
      return;
    }

    setLoading(true);

    try {
      const imageRef = ref(
        storage,
        `achievements/${Date.now()}_${image.name}`
      );

      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, "achievements"), {
        title,
        imageUrl,
        storagePath: imageRef.fullPath,
        createdAt: serverTimestamp(),
      });

      setTitle("");
      setImage(null);
      setPreview("");

      fetchAchievements();
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed");
    }

    setLoading(false);
  };

  // 🗑 DELETE ACHIEVEMENT
  const deleteAchievement = async item => {
    if (!window.confirm("Delete this achievement?")) return;

    try {
      await deleteObject(ref(storage, item.storagePath));
      await deleteDoc(doc(db, "achievements", item.id));
      fetchAchievements();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-container">
        <h1 className="admin-title">🏆 Manage Achievements</h1>
        <p className="admin-sub">
          Upload once — visible instantly on user page
        </p>

        {/* FORM */}
        <div className="achievement-form">
          <input
            type="text"
            placeholder="Achievement title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <input type="file" accept="image/*" onChange={handleImageChange} />

          {/* 🔥 VIDEO CARD STYLE PREVIEW */}
          {preview && (
            <div className="admin-preview-card">
              <img src={preview} alt="Preview" />
              <span>{title || "Achievement Title"}</span>
            </div>
          )}

          <button className="add-btn" onClick={addAchievement} disabled={loading}>
            {loading ? "Uploading..." : "➕ Add Achievement"}
          </button>
        </div>

        {/* LIST */}
        <div className="admin-achievement-grid">
          {achievements.map(item => (
            <div key={item.id} className="admin-achievement-card">
              <img src={item.imageUrl} alt={item.title} />
              <h3>{item.title}</h3>
              <button onClick={() => deleteAchievement(item)}>
                🗑 Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
