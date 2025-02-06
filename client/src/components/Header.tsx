import { Link, useNavigate } from "react-router-dom";

import "./Header.css";
import { useIsAuthenticatedContext } from "../contexts/IsAuthenticatedContext";

function Header() {
  // Exemple d'état de connexion de l'utilisateur

  const { isAuthenticated, setIsAuthenticated, userId } =
    useIsAuthenticatedContext();
  const navigate = useNavigate();

  return (
    <div className="header-content">
      <Link to={"/"}>
        <img
          id="img-logo"
          src="\assets\images\Wildy-gamy-logo.png"
          alt="Logo"
        />
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
            <Link className="auth-link" to={`/user/${userId}`}>
              Mon profil
            </Link>
            <button
              type="button"
              id="login-out"
              onClick={() => {
                if (confirm("Confirmer la déconnexion ?"))
                  fetch(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {
                    credentials: "include",
                  }).then((res) => {
                    if (res.status === 200) {
                      setIsAuthenticated(false);
                      navigate("/");
                    }
                  });
              }}
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
