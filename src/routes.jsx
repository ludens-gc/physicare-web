import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { useUserData } from "./hooks/auth-hook";
import ProtectedRoutes from "./utils/ProtectedRoutes";

// Page imports
import Home from "./pages/public/Home";
import LogIn from "./pages/public/LogIn";
import SignUp from "./pages/public/SignUp";
import Dashboard from "./pages/private/Dashboard";
import Chat from "./pages/private/Chat";
import Sheets from "./pages/private/Sheets";
import NotFound from "./pages/public/NotFound";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Search from "./pages/private/Search";

// Layout imports
import MainLayout from "./layout/MainLayout";
import HomeLayout from "./layout/HomeLayout";
import AuthLayout from "./layout/AuthLayout";

function App() {
  const userData = useUserData();
  console.log(userData);
  return (
    <Router>
      <AuthContext.Provider value={userData}>
        <Routes>
          {userData.user ? (
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/search" element={<Search />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/sheets" element={<Sheets />} />
              </Route>
            </Route>
          ) : (
            <>
              <Route path="/" element={<HomeLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
              </Route>
              <Route path="/" element={<AuthLayout />}>
                <Route path="/log-in" element={<LogIn />} />
                <Route path="/sign-up" element={<SignUp />} />
              </Route>
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
