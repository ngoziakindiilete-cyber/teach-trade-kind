import React, { createContext, useContext, useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "@/lib/firebase";
import type { Profile } from "@/lib/types";

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ error: string | null }>;
  signup: (email: string, password: string, fullName: string, phone: string, location: string) => Promise<{ error: string | null }>;
  signInWithGoogle: () => Promise<{ error: string | null }>;
  logout: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async (userId: string) => {
    const snap = await getDoc(doc(db, "users", userId));
    if (snap.exists()) {
      setProfile(snap.data() as Profile);
    }
  };

  const refreshProfile = async () => {
    if (user) await fetchProfile(user.uid);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        await fetchProfile(firebaseUser.uid);
      } else {
        setProfile(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { error: null };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Login failed";
      return { error: message };
    }
  };

  const signup = async (
    email: string,
    password: string,
    fullName: string,
    phone: string,
    location: string
  ) => {
    try {
      const { user: newUser } = await createUserWithEmailAndPassword(auth, email, password);
      const profileData: Profile = {
        full_name: fullName,
        avatar_url: null,
        bio: null,
        location,
        phone,
        profile_complete: false,
      };
      await setDoc(doc(db, "users", newUser.uid), profileData);
      return { error: null };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Signup failed";
      return { error: message };
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;
      // Create profile doc for new Google users if it doesn't exist yet
      const profileRef = doc(db, "users", firebaseUser.uid);
      const snap = await getDoc(profileRef);
      if (!snap.exists()) {
        const profileData: Profile = {
          full_name: firebaseUser.displayName ?? "",
          avatar_url: firebaseUser.photoURL ?? null,
          bio: null,
          location: null,
          phone: null,
          profile_complete: false,
        };
        await setDoc(profileRef, profileData);
      }
      return { error: null };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Google sign-in failed";
      return { error: message };
    }
  };

  const logout = async () => {
    await signOut(auth);
    setProfile(null);
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, login, signup, signInWithGoogle, logout, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
