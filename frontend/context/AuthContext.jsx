import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  loginUser,
  registerUser,
} from "../src/api/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ==========================================
  // RESTORE LOGIN SESSION
  // ==========================================

  useEffect(() => {
    const storedUser =
      localStorage.getItem("careeros_user");

    const token =
      localStorage.getItem("careeros_token");

    if (storedUser && token) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem(
          "careeros_user"
        );

        localStorage.removeItem(
          "careeros_token"
        );
      }
    }

    setLoading(false);
  }, []);

  // ==========================================
  // LOGIN
  // ==========================================

  const login = async (credentials) => {
    const response =
      await loginUser(credentials);

    localStorage.setItem(
      "careeros_token",
      response.token
    );

    localStorage.setItem(
      "careeros_user",
      JSON.stringify(response.user)
    );

    setUser(response.user);

    return response;
  };

  // ==========================================
  // REGISTER
  // ==========================================

  const register = async (userData) => {
    const response =
      await registerUser(userData);

    localStorage.setItem(
      "careeros_token",
      response.token
    );

    localStorage.setItem(
      "careeros_user",
      JSON.stringify(response.user)
    );

    setUser(response.user);

    return response;
  };

  // ==========================================
  // LOGOUT
  // ==========================================

  const logout = () => {
    localStorage.removeItem(
      "careeros_token"
    );

    localStorage.removeItem(
      "careeros_user"
    );

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: Boolean(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ==========================================
// CUSTOM AUTH HOOK
// ==========================================

export function useAuth() {
  return useContext(AuthContext);
}