import { useState, useEffect } from "react";
import { USER_KEY } from "../../mocks";
import { AuthContext } from ".";

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
