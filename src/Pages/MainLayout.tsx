/** @format */

import { FC } from "react";
import { Outlet } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";
import MiniSideBar from "../MiniSideBar";

const MainLayout: FC = (props: any) => {
  return (
    <div className="sm:flex">
      <div className="">
        <LeftSideBar></LeftSideBar>
        <MiniSideBar></MiniSideBar>
      </div>
      <div className="p-4 bg-gray-200 sm:p-14 grow">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
