import { Counter } from "../../counter/counter";

export const MenuItem = ({menu}) => {
  return (
    <>
      {menu?.map(({ id, name, price, ingredients }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{price}$</p>
          <p>{ingredients.join(', ')}</p>
          <Counter />
        </li>
      ))}
    </>
  );
};
