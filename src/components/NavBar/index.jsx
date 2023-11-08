import { Link } from "react-router-dom";

const NavBar = ({ isAuthenticated }) => {
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
            {isAuthenticated ? (
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
                {!isAuthenticated ? (
                  <>
                    <Link className="button is-primary" to="/auth/sign-up">
                      Sign Up
                    </Link>
                    <Link className="button is-light" to="/auth/log-in">
                      Log In
                    </Link>
                  </>
                ) : (
                  <></>
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
