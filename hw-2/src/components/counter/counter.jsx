import { useCount } from "./use-counter";

export const Counter = () => {
  const { count, onIncrement, OnDecrement } = useCount();

  return (
    <>
      <button type="button" onClick={count > 0 ? OnDecrement : null}>
        -
      </button>
      {count}
      <button type="button" onClick={count < 5 ? onIncrement : null}>
        +
      </button>
    </>
  );
};
