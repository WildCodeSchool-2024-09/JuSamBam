import matthieu from "../assets/images/matthieu_lopez.png";

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
      <div className="user-div">
        <img id="user-picture" src={matthieu} alt="User" />
        <p>Matthieu Lopez</p>
      </div>
    </div>
  );
}

export default Header;
