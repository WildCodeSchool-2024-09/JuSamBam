import { Link } from "react-router-dom";
import { useAuthenticationContext } from "../contexts/AuthenticationContext";

import "./Header.css";

function Header() {
  // Exemple d'état de connexion de l'utilisateur

  const { isAuthenticated, setIsAuthenticated } = useAuthenticationContext();

  return (
    <div className="header-content">
      <img className="img-logo" src="https://picsum.photos/200" alt="Logo" />
      <nav className="header-navbar">
        <button className="pixel-nav" type="button">
          Liste jeux
        </button>
        <button className="pixel-nav" type="button">
          Classement
        </button>
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
