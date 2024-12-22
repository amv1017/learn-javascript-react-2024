import { Menu } from "./Menu";

const MenuWidget = async ({ params }) => {
  const { id } = await params;

  return <Menu id={id} />;
};

export { MenuWidget };
