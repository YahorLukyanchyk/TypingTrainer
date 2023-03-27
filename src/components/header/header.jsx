import { NavLink } from "react-router-dom";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";

import "./header.scss";

const setNavAvtive = ({ isActive }) =>
  isActive ? " header__nav-link nav-active" : "header__nav-link";

function Header({ changeModalVisible }) {
  const auth = useAuthUser()
  const isAuthenticated = useIsAuthenticated();

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__wrapper">
          <div className="header__logo-block">
            <NavLink to="/" className="header__logo-link">
              <img
                src={require("../../assets/img/logo.svg").default}
                alt="Logo"
                className="header__logo"
              />
            </NavLink>
          </div>
          <nav className="header__nav nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <NavLink to="/" className={setNavAvtive}>
                  Главная
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to="modes" className={setNavAvtive}>
                  Режимы
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to="training" className={setNavAvtive}>
                  Обучение
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to="courses" className={setNavAvtive}>
                  Курсы
                </NavLink>
              </li>
            </ul>
          </nav>
          {isAuthenticated() ? (
            <NavLink to="profile/courses">{auth().name}</NavLink>
          ) : (
            <button
              id="sign-in"
              onClick={changeModalVisible}
              className="header__nav-link header__sign-in inline-button"
            >
              Вход/Регистрация
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
