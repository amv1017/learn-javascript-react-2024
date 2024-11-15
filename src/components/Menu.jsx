import MenuDish from "./MenuDish";

export default function Menu({ menu }) {
  return menu ? (
    <table>
      <tr>
        <th>Name</th>
        <th>Ingredients</th>
        <th>Price</th>
        <th>Amount</th>
      </tr>

      {menu.map((dish) => (
        <MenuDish dish={dish} key={dish.id} />
      ))}
    </table>
  ) : (
    <span>menu not found</span>
  );
}
