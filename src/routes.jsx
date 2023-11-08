import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// import { useAuth } from "./yourAuthContext"; // Import your authentication context or hook
import Home from "./pages/public/Home";
import LogIn from "./pages/public/LogIn";
import SignUp from "./pages/public/SignUp";
import Dashboard from "./pages/private/Dashboard";
import Chat from "./pages/private/Chat";
import Sheets from "./pages/private/Sheets";
import NotFound from "./pages/public/NotFound";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import MainLayout from "./layout/MainLayout";
import HomeLayout from "./layout/HomeLayout";
import AuthLayout from "./layout/AuthLayout";
import Search from "./pages/private/Search";

function App() {
  // const { user } = useAuth(); // Access the user state from your authentication context
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(false);

  return (
    <Router>
      <Routes>
        {user ? (
          <Route path="/" element={<MainLayout user={user} />}>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route path="search" element={<Search user={user} />} />
            <Route path="chat" element={<Chat user={user} />} />
            <Route path="sheets" element={<Sheets user={user} />} />
          </Route>
        ) : (
          <>
            <Route path="/" element={<HomeLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="/auth/log-in" element={<LogIn />} />
              <Route path="/auth/sign-up" element={<SignUp />} />
            </Route>
          </>
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
