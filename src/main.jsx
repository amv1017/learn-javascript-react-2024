import { createRoot } from "react-dom/client";
import { restaurants } from "./mocks";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <h1 style={{ margin: "15px", fontSize: "24px" }}>Restaurants</h1>
    {restaurants.map((r) => (
      <div className="part" key={r.id}>
        <h1 style={{ textAlign: "center", fontSize: "22px" }}>{r.name}</h1>

        <table>
          <tr>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Price</th>
          </tr>

          {r.menu.map((e) => (
            <tr key={e.id}>
              <td width={"40%"}>{e.name}</td>
              <td>{e.ingredients.join(", ")}</td>
              <td width={"10%"}>{e.price}</td>
            </tr>
          ))}
        </table>

        <hr style={{ margin: "20px" }} />

        <ul>
          {r.reviews.map((e) => (
            <li key={e.id}>
              <p style={{ display: "flex", justifyContent: "space-evenly" }}>
                <h2>{e.user}</h2>
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
