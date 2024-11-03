import React from "react";
import { Header } from "../components/Header";
import { HEADER_VALUES } from "../constants/dataConstants";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header values={HEADER_VALUES} logo={"Medium"} />
      <main className="p-5">
        <Outlet />
      </main>
    </div>
  );
}
