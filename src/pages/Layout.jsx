import { Outlet } from "react-router";
import Header from "../components/Header";

function Layout() {
  return (
    <div className="h-screen w-screen bg-black/88 text-gray-50">
      <div className="mx-auto grid h-full w-[80%] grid-rows-[auto_1fr] xl:w-[60%]">
        <Header />
        <div className="my-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
