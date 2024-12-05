import { useParams } from "react-router";
import { Menu } from "./Menu";

const MenuWidget = () => {
  const { id } = useParams();

  return <Menu id={id} />;
};

export { MenuWidget };
