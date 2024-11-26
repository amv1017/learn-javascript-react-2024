import { Footer } from "./Footer";
import { Header } from "./Header";
import { AuthContextProvider } from "../context/Auth";
import { ThemeContextProvider } from "../context/Theme";

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
