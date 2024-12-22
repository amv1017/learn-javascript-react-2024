import { useAuth } from "@/hooks";
import loginIcon from "@/static/login.svg";
import userIcon from "@/static/user.svg";
import Image from "next/image";
import styles from "./UserButton.module.css";

const UserButton = () => {
  const { user, authHandler } = useAuth();

  return (
    <button className={styles.loginBtn} onClick={authHandler}>
      <Image src={user.name ? userIcon : loginIcon} alt="user" />
      {user.name && <span>{user.name}</span>}
    </button>
  );
};

export { UserButton };
