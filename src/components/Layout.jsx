import { ProgressBar } from "./ProgressBar";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Cart } from "./Cart";
import { useAuth } from "@/hooks";

const Layout = ({ children }) => {
  const { user } = useAuth();

  return (
    <>
      <ProgressBar />
      <Header />
      {children}
      {user.name && <Cart />}
      <Footer />
    </>
  );
};

export { Layout };
