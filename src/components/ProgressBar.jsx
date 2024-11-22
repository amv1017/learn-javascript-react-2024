import { useEffect, useRef } from "react";
import { scrollPercentage } from "@/functions";
import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
  const ref = useRef();

  useEffect(() => {
    function displayProgress() {
      ref.current.style.width = `${scrollPercentage()}%`;
    }

    window.addEventListener("scroll", displayProgress);
    return () => {
      window.removeEventListener("scroll", displayProgress);
    };
  }, []);

  return <div className={styles.progressbar} ref={ref}></div>;
};

export { ProgressBar };
