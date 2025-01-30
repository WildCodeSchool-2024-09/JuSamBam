import { Link } from "react-router-dom";
import { useAuthenticationContext } from "../contexts/AuthenticationContext";

import "./Header.css";

function Header() {
  // Exemple d'état de connexion de l'utilisateur

  const { isAuthenticated, setIsAuthenticated } = useAuthenticationContext();

  return (
    <div className="header-content">
      <Link to={"/"}>
        <img className="img-logo" src="https://picsum.photos/200" alt="Logo" />
      </Link>
      <nav className="header-navbar">
        <Link className="pixel-nav" to={"/gamelisting"}>
          Liste jeux
          </Link>
          <Link className="pixel-nav" to={"/classement"}>
          Classement
        </Link>
      </nav>
      <section className="auth-section">
        {isAuthenticated ? (
          <>
            <Link className="auth-link" to="/user">
              Mon profil
            </Link>
            <button
              type="button"
              className="auth-link"
              onClick={() => setIsAuthenticated(false)}
            >
              Se déconnecter
            </button>
          </>
        ) : (
          <>
            <Link className="auth-link" to="/login">
              Se connecter
            </Link>
            <Link className="auth-link" to="/subscribe">
              S'inscrire
            </Link>
          </>
        )}
      </section>
    </div>
  );
}

export default Header;
