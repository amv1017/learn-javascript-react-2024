import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  function displayProgress() {
    setProgressBarWidth(
      (100 * window.scrollY) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight),
    );
  }

  useEffect(() => {
    window.addEventListener("scroll", displayProgress);
    return () => {
      window.removeEventListener("scroll", displayProgress);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        height: "5px",
        background:
          "linear-gradient(90deg, rgba(255,128,128,1) 0%, rgba(255,0,0,1) 100%)",
        width: `${progressBarWidth}%`,
      }}
    ></div>
  );
};

export { ProgressBar };
