import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

const AuthContext = createContext(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const ref = doc(db, "users", firebaseUser.uid);
        const snap = await getDoc(ref);

        if (!snap.exists()) {
          await setDoc(ref, {
            email: firebaseUser.email,
            role: "user",
          });
        }

        const finalSnap = await getDoc(ref);

        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          role: finalSnap.data().role,
        });
      } catch (err) {
        console.error("Auth restore failed:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    });

    return () => unsub();
  }, []);

  const adminLogin = async (email, password) => {
    const cred = await signInWithEmailAndPassword(auth, email, password);

    await setDoc(
      doc(db, "users", cred.user.uid),
      { email, role: "admin" },
      { merge: true }
    );

    await addDoc(collection(db, "loginHistory"), {
      uid: cred.user.uid,
      email,
      role: "admin",
      loginTime: serverTimestamp(),
    });
  };

  const userGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const cred = await signInWithPopup(auth, provider);

    await setDoc(
      doc(db, "users", cred.user.uid),
      { email: cred.user.email, role: "user" },
      { merge: true }
    );

    await addDoc(collection(db, "loginHistory"), {
      uid: cred.user.uid,
      email: cred.user.email,
      role: "user",
      loginTime: serverTimestamp(),
    });
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,                // ✅ FIX
        isAuthenticated: !!user,
        isAdmin: user?.role === "admin", // ✅ BOOLEAN ONLY
        adminLogin,
        userGoogleLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
