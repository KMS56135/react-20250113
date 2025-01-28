export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews?.map(({ id, user, text, rating }) => (
          <li key={id}>
            <p>
              {user}: {text}
            </p>
            <p>{rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
