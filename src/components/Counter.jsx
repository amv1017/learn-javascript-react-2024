const Counter = ({ value, increment, decrement }) => {
  // в атрибутах кнопок type="button", чтобы при выносе компонента <Counter /> на форму не вызывать ее отправку
  return (
    <div className="counter">
      <button type="button" onClick={increment}>
        +
      </button>
      <span>{value}</span>
      <button type="button" onClick={decrement}>
        -
      </button>
    </div>
  );
};

export { Counter };
