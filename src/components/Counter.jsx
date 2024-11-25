import classNames from "classnames";
import styles from "./Counter.module.css";

const Counter = ({ value, increment, decrement, btnClassName }) => {
  // в атрибутах кнопок type="button", чтобы при выносе компонента <Counter /> на форму не вызывать ее отправку
  return (
    <div className={styles.counter}>
      <button
        className={classNames(styles.button, btnClassName)}
        type="button"
        onClick={increment}
      >
        +
      </button>
      <span className={styles.value}>{value}</span>
      <button
        className={classNames(styles.button, btnClassName)}
        type="button"
        onClick={decrement}
      >
        -
      </button>
    </div>
  );
};

export { Counter };
