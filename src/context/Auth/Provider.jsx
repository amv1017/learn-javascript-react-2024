import { useState, useEffect } from "react";
import { USER_KEY, USER_NAME } from "@/mocks";
import { AuthContext } from ".";

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "" });

  useEffect(() => {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const login = () => {
    const userModified = { ...user, name: USER_NAME };
    setUser(userModified);
    localStorage.setItem(USER_KEY, JSON.stringify(userModified));
  };

  const logout = () => {
    setUser({ ...user, name: "" });
    localStorage.removeItem(USER_KEY);
  };

  const authHandler = () => (user.name ? logout : login)();

  return (
    <AuthContext.Provider value={{ user, setUser, authHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
