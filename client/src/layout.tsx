import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Nav from "./components/nav";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container">
        <Nav />
      </header>
      <main className="flex-1 container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
