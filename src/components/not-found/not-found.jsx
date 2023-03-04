import { NavLink } from "react-router-dom";

import "./not-found.scss";

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__wrapper">
        <div className="not-found__content">
          <h1>Запрашиваемая вами страница не найдена!</h1>
          <p>
            Мистер Хеппи не смог найти данную страницу, проверьте правильность
            введенных данных.
          </p>
          <NavLink to="/" className="button">
            Вернуться на главную
          </NavLink>
        </div>
        <img src={require("../../assets/img/cat-notfound.svg").default} alt="NotFound" />
      </div>
    </section>
  );
}

export default NotFound;
