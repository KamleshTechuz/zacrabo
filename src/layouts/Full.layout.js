import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../shared/components/Navbar";

export const FullLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
};
