import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

function Layout() {
  return (
    <div className="font-marcellus-sc grid h-svh grid-cols-[12%_1fr] px-6">
      <div className="flex items-center border-r-2 border-gray-300">
        <Sidebar />
      </div>
      <div className="flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
