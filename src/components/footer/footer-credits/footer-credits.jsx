import "./footer-credits.scss"
import avatar from "../../../assets/img/author-artur.png";

import Author from "../../author/author";

function FooterCredits() {
    return ( 
        <div className="footer__credits">
          <div className="footer__wrapper">
            <div className="footer__logo-block">
              <a href="/" className="footer__logo-link">
                <img
                  src={require("../../../assets/img/logo-black.svg").default}
                  alt="Logo"
                  className="footer__logo"
                />
              </a>
            </div>
            <div className="footer__authors-block">
              <Author
                link="/"
                image={avatar}
                name="Артур Чернецкий"
                work="Дизайн интерфейса"
              />
              <Author
                link="/"
                image={avatar}
                name="Егор Лукьянчик"
                work="Front-end разработка"
              />
              <Author
                link="/"
                image={avatar}
                name="Андрей Янковец"
                work="Back-end разработка"
              />
            </div>
          </div>
        </div>
     );
}

export default FooterCredits;