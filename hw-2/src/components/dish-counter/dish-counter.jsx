import { Counter } from "../counter/counter";
import { useCount } from "./use-counter"

export const DishCounter = () => {
  const { count, onIncrement, onDecrement } = useCount();

  return <Counter count={count}  onIncrement={onIncrement} onDecrement={onDecrement} />
}