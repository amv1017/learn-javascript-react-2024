import { Navbar } from "@/components";
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
