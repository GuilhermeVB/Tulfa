function Header({ menuClick }) {

  return (
    <header className="header_container">
      <img className="header_logo" src="./images/header/logo.png" alt="Tulfa Logo" />
      <img className="header_menu" src="./images/header/menu.png" alt="Menu" onClick={menuClick} />
    </header>
  );
}

export default Header;
