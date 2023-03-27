import { useAuthUser } from "react-auth-kit";
import { NavLink } from "react-router-dom";
import { useSignOut } from "react-auth-kit";

import "./aside.scss";

function Aside() {
  const setNavAvtive = ({ isActive }) =>
    isActive ? " header__nav-link item__active" : "header__nav-link";

  const auth = useAuthUser();
  const signOut = useSignOut();

  return (
    <div className="aside">
      <div className="aside__wrapper">
        <div className="profile">
          <div className="profile__block">
            <span className="profile__name">{auth().name}</span>
          </div>
        </div>
        <div className="settings">
          <div className="settings__block">
            <div className="settings__item">
              <NavLink to="courses" className={setNavAvtive}>
                <div className="settings__image-wrapper">
                  <img
                    src={require("../../assets/img/courses.svg").default}
                    alt="Courses"
                  />
                </div>
                Курсы
              </NavLink>
            </div>
            <div className="settings__item">
              <NavLink to="modes" className={setNavAvtive}>
                <div className="settings__image-wrapper">
                  <img
                    src={require("../../assets/img/modes.svg").default}
                    alt="Modes"
                  />
                </div>
                Режимы
              </NavLink>
            </div>
            <div className="settings__item">
              <NavLink to="settings" className={setNavAvtive}>
                <div className="settings__image-wrapper">
                  <img
                    src={require("../../assets/img/settings.svg").default}
                    alt="Settings"
                  />
                </div>
                Настройки
              </NavLink>
            </div>
          </div>
        </div>
        <button className="button" onClick={signOut}>
          Выйти из профиля
        </button>
      </div>
    </div>
  );
}

export default Aside;
