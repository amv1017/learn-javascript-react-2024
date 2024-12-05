import classNames from "classnames";
import { SwitchTheme } from "./SwitchTheme";
import { UserButton } from "./UserButton";
import { useTheme } from "@/hooks";
import styles from "./Header.module.css";

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
