import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="align-element">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
