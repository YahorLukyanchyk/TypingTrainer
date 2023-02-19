import "./header.scss";

function Header({ changeModalVisible }) {
  
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__wrapper">
          <div className="header__logo-block">
            <a href="/" className="header__logo-link">
              <img src={require('../../assets/img/logo.svg').default} alt="Logo" className="header__logo"/>
            </a>
          </div>
          <nav className="header__nav nav">
            <ul className="header__nav-list">
              <li className="header__nav-item"><a href="/" className="header__nav-link">Главная</a></li>
              <li className="header__nav-item"><a href="/" className="header__nav-link">Режимы</a></li>
              <li className="header__nav-item"><a href="/" className="header__nav-link">Обучение</a></li>
              <li className="header__nav-item"><a href="/" className="header__nav-link">Курсы</a></li>
            </ul>
          </nav>
          <button id="sign-in" onClick={changeModalVisible} className="header__nav-link header__sign-in inline-button">Вход/Регистрация</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
