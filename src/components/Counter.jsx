const Counter = ({ value, increment, decrement }) => {
  return (
    <div className="counter">
      <button
        onClick={(e) => {
          e.preventDefault();
          increment();
        }}
      >
        +
      </button>
      <span>{value}</span>
      <button
        onClick={(e) => {
          e.preventDefault();
          decrement();
        }}
      >
        -
      </button>
    </div>
  );
};

export { Counter };
