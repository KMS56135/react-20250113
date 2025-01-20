import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import { restaurants } from "../materials/mock";

const rootElement = document.querySelector("#root");
const reactRoot = createRoot(rootElement);

reactRoot.render(
  <>
    {restaurants.map(({ id, name, menu, reviews }) => {
      return (
        <Fragment key={id}>
          <h2>{name}</h2>

          <h3>Меню</h3>

          <ul>
            {menu.map(({ name, id }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>

          <h3>Отзывы</h3>

          <ul>
            {reviews.map(({ text, id }) => {
              return <li key={id}>{text}</li>;
            })}
          </ul>
        </Fragment>
      );
    })}
  </>
);
