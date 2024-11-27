import classNames from "classnames";
import { useTheme } from "../hooks";
import styles from "./Header.module.css";
import { UserButton } from "./UserButton";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={classNames(styles.header, {
        [theme == "dark" ? styles.dark : styles.light]: true,
      })}
    >
      <h1>Restaurants</h1>
      <div className={styles.controls}>
        <UserButton />
        <label className={styles.switch}>
          <input
            type="checkbox"
            onChange={() => {
              toggleTheme();
            }}
            checked={theme == "dark"}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </header>
  );
};

export { Header };
