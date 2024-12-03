import { ProgressBar, Footer, Header, Cart } from "@/components";
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
