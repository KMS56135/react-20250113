import { Dish } from "../dish/dish";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {menu?.map((menu) => {
          return (
            <li key={menu.id}>
              <Dish name={menu.name} price={menu.price} ingredients={menu.ingredients} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
