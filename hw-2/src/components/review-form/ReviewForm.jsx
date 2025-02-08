import { Counter } from "../counter/counter";
import { useCount } from "../dish-counter/use-counter";
import { useForm } from "./use-form";

export const ReviewForm = () => {
  const { count, onIncrement, onDecrement } = useCount();
  const { form, setName, setComment, reset } = useForm();
  const { name, comment } = form;

  return (
    <form>
      <div>
        <label htmlFor="name"></label>
        <input
          onChange={(event) => setName(event.target.value)}
          value={name}
          type="text"
          name="name"
          id="name"
          placeholder="Ваше имя"
        />
      </div>
      <div>
        <label htmlFor="comments"></label>
        <textarea
          onChange={(event) => setComment(event.target.value)}
          value={comment}
          name="comments"
          id="comments"
          placeholder="Ваш комментарий"
        ></textarea>
      </div>
      <Counter count={count} onIncrement={onIncrement} onDecrement={onDecrement} />
      <button onClick={() => reset()}>Reset</button>
    </form>
  );
};
