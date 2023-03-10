import "./footer-credits.scss"
import authors from "../../../data/authors";
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
              {authors.map((author) => {
               return <Author key={author.id} {...author}/>
              })}
            </div>
          </div>
        </div>
     );
}

export default FooterCredits;