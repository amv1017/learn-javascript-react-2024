import { useTheme } from "@/hooks";
import classNames from "classnames";
import styles from "./Header.module.css";
import { SwitchTheme } from "./SwitchTheme";
import { UserButton } from "./UserButton";

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
