import { Outlet } from "react-router";
import Header from "../components/Header";

function Layout() {
  return (
    <div className="h-screen w-screen bg-black/92 text-gray-50">
      <div className="mx-auto grid h-full grid-rows-[auto_1fr] lg:w-[80%] xl:w-[60%]">
        <Header />
        <div className="my-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
