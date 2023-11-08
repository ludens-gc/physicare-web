import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = ({ user }) => {
  return (
    <>
      <NavBar isAuthenticated={user} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
