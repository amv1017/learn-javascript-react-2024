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
      {reviews.map((e) => (
        <li className="review" key={e.id}>
          <p style={{ display: "flex", justifyContent: "space-evenly" }}>
            <h4>{e.user}</h4>
            <Stars rating={e.rating} />
          </p>
          <i>{e.text}</i>
        </li>
      ))}
    </ul>
  ) : (
    <span>no reviews found</span>
  );

export { Reviews };
