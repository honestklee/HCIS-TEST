"use client";

import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const clearAuthData = () => {
      localStorage.removeItem('user');
      localStorage.removeItem('authToken');
      localStorage.removeItem('session');
      // Clear any other auth-related keys
      Object.keys(localStorage).forEach(key => {
        if (key.includes('auth') || key.includes('token') || key.includes('session')) {
          localStorage.removeItem(key);
        }
      });
    };

  }, []);

  // Check authentication status on mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('/api/auth');
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData));
        } else {
          setUser(null);
          localStorage.removeItem('user');
          await fetch('/api/auth', { method: 'DELETE' });
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setUser(null);
        localStorage.removeItem('user');
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const updateUser = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      localStorage.removeItem('user');
    }
  };

  const logout = async () => {
    try {
      // Call logout API to clear server session
      const response = await fetch('/api/auth', { method: 'DELETE' });
      if (!response.ok) {
        console.error('Logout API failed:', response.status);
      }
    } catch (error) {
      console.error('Logout API call failed:', error);
    } finally {
      // Clear all auth-related data immediately
      setUser(null);
      
      // Clear localStorage completely
      localStorage.clear();
      
      // Clear sessionStorage completely
      sessionStorage.clear();
      
      // Clear all browser cookies with multiple path domains
      document.cookie.split(";").forEach(function(c) { 
        const cookie = c.replace(/^ +/, "").replace(/=.*/, "");
        document.cookie = `${cookie}=;expires=${new Date().toUTCString()};path=/`;
        document.cookie = `${cookie}=;expires=${new Date().toUTCString()};path=/;domain=${window.location.hostname}`;
        if (window.location.hostname.includes('.')) {
          const domain = window.location.hostname.substring(window.location.hostname.indexOf('.'));
          document.cookie = `${cookie}=;expires=${new Date().toUTCString()};path=/;domain=${domain}`;
        }
      });
      
      // Clear all caches and service workers
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(cacheName => caches.delete(cacheName)));
      }
      
      // Unregister service workers
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map(registration => registration.unregister()));
      }
      
      // Clear any IndexedDB data
      if ('indexedDB' in window) {
        const databases = await indexedDB.databases();
        await Promise.all(databases.map(db => indexedDB.deleteDatabase(db.name)));
      }
      
      // Force hard reload with timestamp and cache busting to prevent caching
      const timestamp = new Date().getTime();
      const random = Math.random().toString(36).substring(7);
      window.location.replace(`/?t=${timestamp}&r=${random}`);
    }
  };

  return (
    <UserContext.Provider value={{ user, updateUser, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
