import { Outlet } from "react-router";
import Header from "../components/Header";

function Layout() {
  return (
    <div className="min-h-screen w-svw bg-black/88 text-gray-50">
      <div className="mx-auto flex min-h-screen w-[80%] flex-col xl:w-[60%]">
        <Header />
        <div className="flex flex-grow items-center justify-center">
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
