import { Review } from "./Review";

const Reviews = ({ reviews }) => {
  return reviews ? (
    <ul>
      {reviews.map((id) => (
        <Review id={id} key={id} />
      ))}
    </ul>
  ) : (
    <span>no reviews found</span>
  );
};

export { Reviews };
