import { Footer } from "./Footer";
import { Header } from "./Header";
import { AuthContextProvider } from "../context/Auth/Provider";
import { ThemeContextProvider } from "../context/Theme/Provider";

const Layout = ({ children }) => {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Header />
        {children}
        <Footer />
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};

export { Layout };
