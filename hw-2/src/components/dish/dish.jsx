export const Dish = ({ name, price, ingredients }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>{ingredients.join(', ')}</p>
    </div>
  );
};
