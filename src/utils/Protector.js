import React from "react";
import { Outlet, Navigate } from "react-router";

export const Protector = ({ user }) => {
  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};
