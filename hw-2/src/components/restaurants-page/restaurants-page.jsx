import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Restaurant } from "../restaurant/restaurant";
import { Tab } from "../tab/tab";

export const RestaurantsPage = ({ title }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);

  const activeRestaurant = restaurants.find(({ id }) => id === activeRestaurantId);

  const handleSetActiveRestaurantId = (id) => {
    if (activeRestaurant === id) {
      return;
    }

    setActiveRestaurantId(id);
  };

  return (
    <div>
      {restaurants.map(({ name, id }) => (
        <Tab key={id} title={name} onClick={() => handleSetActiveRestaurantId(id)} isActive={id === activeRestaurantId} />
      ))}

      <h1>{title}</h1>

      {activeRestaurant && <Restaurant key={activeRestaurant.id} name={activeRestaurant.name} menu={activeRestaurant.menu} reviews={activeRestaurant.reviews} />}
    </div>
  );
};
