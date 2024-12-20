import rankingButton from "../assets/images/bouton-classement.png";
import gamesListButton from "../assets/images/bouton-liste-de-nos-jeux.png";
import restaurationButton from "../assets/images/bouton-restauration.png";
import socialButton from "../assets/images/bouton-social.png";
import matthieu from "../assets/images/matthieu_lopez.png";

import "./Header.css";

function Header() {
  return (
    <div className="header-content">
      <img className="img-logo" src="https://picsum.photos/200" alt="" />
      <nav className="header-navbar">
        <img
          className="header-button"
          src={rankingButton}
          alt="Bouton ne navigation vers la page de classement"
        />
        <img
          className="header-button"
          src={socialButton}
          alt="Bouton ne navigation vers la page de social"
        />
        <img
          className="header-button"
          src={gamesListButton}
          alt="Bouton ne navigation vers la page de jeux"
        />
        <img
          className="header-button"
          src={restaurationButton}
          alt="Bouton ne navigation vers la page de restauration"
        />
      </nav>
      <div className="user-div">
        <img id="user-picture" src={matthieu} alt="" />
        <p>Matthieu Lopez</p>
      </div>
    </div>
  );
}

export default Header;
