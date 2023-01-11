import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";

function Boutique() {
  return (
    <div className="d-flex">
      <SideBar />
      <Outlet/>
    </div>
  );
}

export default Boutique;