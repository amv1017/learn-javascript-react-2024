import { ProgressBar, Footer, Header } from "@/components";

const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export { Layout };
