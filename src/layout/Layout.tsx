import * as React from "react";
import Header from "../components/header/Header.tsx";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
