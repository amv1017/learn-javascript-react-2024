const Stars = ({
  rating,
  paint = (l) => [...Array(l)].map(() => "★").join(""),
}) => (
  <div>
    <span style={{ color: "orange" }}>{paint(+rating)}</span>
    <span style={{ color: "grey" }}>{paint(5 - +rating)}</span>
  </div>
);

const Reviews = ({ reviews }) =>
  reviews ? (
    <ul>
      {reviews.map((review) => (
        <li className="review" key={review.id}>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <h4>{review.user}</h4>
            <Stars rating={review.rating} />
          </div>
          <i>{review.text}</i>
        </li>
      ))}
    </ul>
  ) : (
    <span>no reviews found</span>
  );

export { Reviews };
