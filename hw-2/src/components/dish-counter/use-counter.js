import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(() => {
      return count + 1;
    });
  };

  const onDecrement = () => {
    setCount(() => {
      return count - 1;
    });
  };

  return {
    count,
    onIncrement,
    onDecrement,
  };
};
