import { NavLink } from "react-router-dom";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import { useState } from "react";
import { Modal } from "react-bootstrap";

import "./header.scss";
import ModalSignIn from "../modal/modal-sign-in/modal-sign-in";

const setNavAvtive = ({ isActive }) =>
  isActive ? " header__nav-link nav-active" : "header__nav-link";

function Header({ changeModalVisible }) {
  const auth = useAuthUser();
  const isAuthenticated = useIsAuthenticated();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
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
                onClick={() => handleShow()}
                className="header__nav-link header__sign-in inline-button"
              >
                Вход/Регистрация
              </button>
            )}
          </div>
        </div>
      </header>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className="modal__block">
          <ModalSignIn handleClose={handleClose} />
          <button className="button modal__exit" onClick={handleClose}>
            <img
              src={require("../../assets/img/exit.svg").default}
              alt="Arrow"
            />
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Header;
