import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

function Layout() {
  return (
    <div className="font-marcellus-sc flex h-svh flex-col md:grid md:grid-cols-[12%_1fr] md:items-center md:justify-center">
      <div>
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
