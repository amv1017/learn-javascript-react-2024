import { useSelector } from "react-redux";
import { useParams } from "react-router";
import classNames from "classnames";
import { MenuDish } from "@/components";
import { useAuth, useTheme } from "@/hooks";
import styles from "./Menu.module.css";
import { selectRestaurantById } from "@/store/features/restaurants";

const Menu = () => {
  const { user } = useAuth();
  const { theme } = useTheme();

  const { id } = useParams();

  const { menu } =
    useSelector((state) => selectRestaurantById(state, id)) ?? {};

  if (!menu) {
    return;
  }

  const common = theme == "dark" ? styles.dark : styles.light;

  return menu ? (
    <table
      className={classNames({
        [user.name ? styles.maxTable : styles.minTable]: true,
      })}
    >
      <tr>
        <th className={common}>Name</th>
        <th className={common}>Ingredients</th>
        <th className={common}>Price</th>
        {user.name && <th className={common}>Amount</th>}
      </tr>

      {menu.map((id) => (
        <MenuDish id={id} key={id} />
      ))}
    </table>
  ) : (
    <span>menu not found</span>
  );
};

export { Menu };
