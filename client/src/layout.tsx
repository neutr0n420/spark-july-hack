import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/footer";
import Nav from "./components/nav";
import { cn } from "./lib/utils";

const Layout = () => {
  const location = useLocation();

  return (
    <div
      className={cn(
        "flex min-h-screen flex-col",
        location.pathname == "/" && "bg-black text-[#D6D6D6]"
      )}
    >
      <header className="container">
        <Nav />
      </header>
      <main className="flex-1 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
