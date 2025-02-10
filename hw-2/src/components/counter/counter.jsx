export const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <>
      <button type="button" onClick={count > 0 ? onDecrement : null}>
        -
      </button>
      {count}
      <button type="button" onClick={count < 5 ? onIncrement : null}>
        +
      </button>
    </>
  );
};
