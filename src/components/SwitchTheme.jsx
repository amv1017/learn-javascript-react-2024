import { useTheme } from "@/hooks";
import styles from "./SwitchTheme.module.css";

const SwitchTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
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
  );
};

export { SwitchTheme };
