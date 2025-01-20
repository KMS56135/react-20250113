import { createRoot } from "react-dom/client";
import { Fragment } from "react";

const rootElement = document.querySelector("#root");

const reactRoot = createRoot(rootElement);

import { restaurants } from "../materials/mock";

reactRoot.render(
  <>
    {restaurants.map((restaurant) => {
      return (
        <Fragment key={restaurant.id}>
          <h2>{restaurant.name}</h2>

          <h3>Меню</h3>

          <ul>
            {restaurant.menu.map(({ name, id }) => {
              return (
                <Fragment key={id}>
                  <li>{name}</li>
                </Fragment>
              );
            })}
          </ul>

          <h3>Отзывы</h3>

          <ul>
            {restaurant.reviews.map(({ text, id }) => {
              return (
                <Fragment key={id}>
                  <li>{text}</li>
                </Fragment>
              );
            })}
          </ul>
        </Fragment>
      );
    })}
  </>
);
