import { createContext, useContext, useState, useEffect } from "react";
import { USER_KEY } from "../mocks";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  useEffect(() => {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const [user, setUser] = useState({ name: "" });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthContextProvider");
  }
  return context;
};
