import { useMemo } from "react";
import { useAuth } from "../hooks";
import loginIcon from "../static/login.svg";
import userIcon from "../static/user.svg";
import { USER_KEY, USER_NAME } from "../mocks";
import styles from "./UserButton.module.css";

const UserButton = () => {
  const { user, setUser } = useAuth();

  const name = useMemo(() => user.name, [user]);

  return (
    <button
      className={styles.loginBtn}
      onClick={() => {
        if (name) {
          localStorage.removeItem(USER_KEY);
          setUser({ ...user, name: "" });
        } else {
          const userModified = { ...user, name: USER_NAME };
          setUser(userModified);
          localStorage.setItem(USER_KEY, JSON.stringify(userModified));
        }
      }}
    >
      <img src={name ? userIcon : loginIcon} alt="user" />
      {name && <span>{name}</span>}
    </button>
  );
};

export { UserButton };
