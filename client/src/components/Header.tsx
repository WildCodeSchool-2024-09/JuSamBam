import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
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
        <Link className="auth-link" to="/login">
          Se connecter
        </Link>
        <Link className="auth-link" to="/subscribe">
          S'inscrire
        </Link>
      </section>
    </div>
  );
}

export default Header;
