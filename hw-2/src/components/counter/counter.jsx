import { useCount } from "./use-counter";

export const Counter = () => {
  const { count, onIncrement, onDecrement } = useCount();

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
