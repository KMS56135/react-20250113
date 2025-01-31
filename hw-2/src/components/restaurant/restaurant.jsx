import { Menu } from "../menu/menu";
import { Reviews } from "../reviews/reviews";

export const Restaurant = ({ name, menu, reviews }) => {
  if (!name) {
    return null;
  }

  return (
    <section>
      <h2>{name}</h2>
      {menu.length ? <Menu menu={menu} /> : <div> empty menu</div>}
      {reviews.length ? <Reviews reviews={reviews} /> : <div> empty reviews</div>}
    </section>
  );
};
