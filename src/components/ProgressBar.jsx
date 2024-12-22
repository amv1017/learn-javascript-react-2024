"use client";

import { scrollPercentage } from "@/functions";
import { useEffect, useState } from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  useEffect(() => {
    function displayProgress() {
      setProgressBarWidth(scrollPercentage());
    }

    window.addEventListener("scroll", displayProgress);
    return () => {
      window.removeEventListener("scroll", displayProgress);
    };
  }, []);

  return (
    <div
      className={styles.progressbar}
      style={{
        width: `${progressBarWidth}%`,
      }}
    ></div>
  );
};

export { ProgressBar };
