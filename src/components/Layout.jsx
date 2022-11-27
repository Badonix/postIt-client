import React from "react";
import Navbar from "./Navbar";
import { Outlet, Link } from "react-router-dom";
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
