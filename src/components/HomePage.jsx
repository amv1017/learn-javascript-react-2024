import { Navbar } from "./Navbar";
import { Outlet } from "react-router";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export { HomePage };
