import React from "react";
import { Outlet } from "react-router-dom";
import Team from "../pages/Team/Team";
import YearsOfSuccess from "../pages/Home/YearsOfSuccess";


export default function TeamLayout() {
  return (
    <div>
      <Team />
      <Outlet />
      <YearsOfSuccess />
    </div>
  );
}
