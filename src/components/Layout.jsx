import { ProgressBar } from "./ProgressBar";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Cart } from "./Cart";
import { useAuth } from "@/hooks";
import { Navbar } from "./Navbar";

const Layout = ({ children }) => {
  const { user } = useAuth();

  return (
    <>
      <ProgressBar />
      <Header />
      <Navbar />
      {children}
      {user.name && <Cart />}
      <Footer />
    </>
  );
};

export { Layout };
