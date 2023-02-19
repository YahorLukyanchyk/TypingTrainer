import "./footer.scss";

import FooterCredits from "./footer-credits/footer-credits";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__wrapper">
          <div className="footer__navigation">
            <p className="footer__copyright">© 2023 TypingTrainer</p>
            <div className="footer__nav">
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <a href="/" className="footer__nav-link">
                    Политика конфиденциальности
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/" className="footer__nav-link">
                    Пользовательское соглашение
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/" className="footer__nav-link">
                    Соглашение на получение рассылки
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <FooterCredits />
      </div>
    </footer>
  );
}

export default Footer;
