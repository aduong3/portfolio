import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

function Layout() {
  return (
    <div className="h-screen w-screen bg-black/96 text-gray-50">
      <div className="mx-auto grid w-[50%] grid-rows-[auto_1fr]">
        <Sidebar />
        <div className="py-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
