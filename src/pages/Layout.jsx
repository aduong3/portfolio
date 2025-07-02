import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

function Layout() {
  return (
    <div className="font-marcellus-sc grid h-svh grid-cols-[12%_1fr]">
      <div className="flex items-center">
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
