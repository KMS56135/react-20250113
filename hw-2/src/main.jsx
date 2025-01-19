import { createRoot } from "react-dom/client";

const rootElement = document.querySelector("#root");

const reactRoot = createRoot(rootElement);

import { restaurants } from "../materials/mock";

reactRoot.render(
  <>
    {restaurants.map((restaurant) => {
      return (
        <>
          <h2>{restaurant.name}</h2>

          <h3>Меню</h3>

          <ul>
            {restaurant.menu.map(({ name }) => {
              return <li>{name}</li>;
            })}
          </ul>

          <h3>Отзывы</h3>

          <ul>
            {restaurant.reviews.map(({ text }) => {
              return <li>{text}</li>;
            })}
          </ul>
        </>
      );
    })}
  </>
);
