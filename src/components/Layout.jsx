"use client";

import { useAuth } from "@/hooks";
import { Suspense } from "react";
import { Cart } from "./Cart";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Loading from "./Loading";
import { NavbarWrapper } from "./NavbarWrapper";
import { ProgressBar } from "./ProgressBar";

const Layout = ({ children }) => {
  const { user } = useAuth();

  return (
    <>
      <ProgressBar />
      <Header />
      <Suspense fallback={<Loading />}>
        <NavbarWrapper />
      </Suspense>
      {children}
      {user.name && <Cart />}
      <Footer />
    </>
  );
};

export { Layout };
