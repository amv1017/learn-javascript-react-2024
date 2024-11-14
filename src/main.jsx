import { createRoot } from "react-dom/client";
import { restaurants } from "./mocks";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <div className="title">
      <h1>Restaurants</h1>
    </div>
    {restaurants.map((restaurant) => (
      <div className="part" key={restaurant.id}>
        <h2>{restaurant.name}</h2>

        <table>
          <tr>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Price</th>
          </tr>

          {restaurant.menu.map((e) => (
            <tr key={e.id}>
              <td width={"40%"}>{e.name}</td>
              <td>{e.ingredients.join(", ")}</td>
              <td width={"10%"}>{e.price}</td>
            </tr>
          ))}
        </table>

        <hr style={{ margin: "20px" }} />

        <ul>
          {restaurant.reviews.map((e) => (
            <li key={e.id}>
              <p style={{ display: "flex", justifyContent: "space-evenly" }}>
                <h4>{e.user}</h4>
                <span style={{ color: "orange" }}>
                  {[...Array(+e.rating)].map(() => "★").join("")}
                </span>
              </p>
              <i>{e.text}</i>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </>,
);
