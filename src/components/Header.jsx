import classNames from "classnames";
import { useTheme } from "@/hooks";
import { UserButton } from "./UserButton";
import styles from "./Header.module.css";
import { SwitchTheme } from "./SwitchTheme";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header
      className={classNames(
        styles.header,
        theme == "dark" ? styles.dark : styles.light,
      )}
    >
      <h1>Restaurants</h1>
      <div className={styles.controls}>
        <UserButton />
        <SwitchTheme />
      </div>
    </header>
  );
};

export { Header };
