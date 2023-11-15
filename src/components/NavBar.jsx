import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [signOut, loading, error] = useSignOut(auth);

  async function handleLogout() {
    try {
      const success = await signOut();
      if (success) {
        navigate("/log-in");
      }
    } catch (err) {
      alert(`Erro ao fazer Logout!
      Erro: ${error}`);
    }
  }

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="/react.svg" />
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            {user ? (
              <>
                <Link className="navbar-item" to="/chat">
                  Chat
                </Link>
                <Link className="navbar-item" to="/sheets">
                  Sheets
                </Link>
                <Link className="navbar-item" to="/search">
                  Search
                </Link>
              </>
            ) : (
              <>
                <Link className="navbar-item" to="/about">
                  About
                </Link>
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>
              </>
            )}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {user ? (
                  <>
                    <button
                      className="button is-light"
                      disabled={loading}
                      onClick={handleLogout}
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link className="button is-primary" to="/sign-up">
                      Sign Up
                    </Link>
                    <Link className="button is-light" to="/log-in">
                      Log In
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
