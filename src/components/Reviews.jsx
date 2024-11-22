import { ReviewStars } from "./ReviewStars";

const Reviews = ({ reviews }) =>
  reviews ? (
    <ul>
      {reviews.map((review) => (
        <li className="review" key={review.id}>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <h4>{review.user}</h4>
            <ReviewStars rating={review.rating} />
          </div>
          <i>{review.text}</i>
        </li>
      ))}
    </ul>
  ) : (
    <span>no reviews found</span>
  );

export { Reviews };
