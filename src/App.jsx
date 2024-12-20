"use client";

import { StoreProvider } from "@/store/StoreProvider";
import { AuthContextProvider, ThemeContextProvider } from "@/context";
import { Layout } from "@/components/Layout";
import "./app.css";

const App = ({ children }) => {
  return (
    <StoreProvider>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>{children}</Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </StoreProvider>
  );
};

export { App };
