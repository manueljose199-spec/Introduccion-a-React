import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("twitterUser");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const login = (username, password) => {
    if (!username.trim() || password.length < 4) {
      return { ok: false, error: "Contraseña mínimo 4 caracteres." };
    }
    const userData = { username: username.trim() };
    setUser(userData);
    localStorage.setItem("twitterUser", JSON.stringify(userData));
    return { ok: true };
  };

  const register = (username, password) => {
    if (!username.trim() || password.length < 4) {
      return { ok: false, error: "Contraseña mínimo 4 caracteres." };
    }
    const userData = { username: username.trim() };
    setUser(userData);
    localStorage.setItem("twitterUser", JSON.stringify(userData));
    return { ok: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("twitterUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);