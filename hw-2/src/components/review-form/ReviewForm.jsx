import { Counter } from "../counter/counter";
import { useForm } from "./use-form";

export const ReviewForm = () => {
  const { form, setName, setComment, increment, decrement, reset } = useForm();
  const { name, comment, count } = form;

  return (
    <form onSubmit={(event) => event.preventDefault()}>
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
      <Counter count={count} onIncrement={increment} onDecrement={decrement} />
      <button onClick={() => reset()}>Reset</button>
    </form>
  );
};
