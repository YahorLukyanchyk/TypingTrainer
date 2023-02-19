
import { useEffect, useState } from "react";

import "./up-button.scss";

function UpButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    backToTopButton && (
      <div className="scroll-up__block">
        <button onClick={scrollUp} className="button up-button">
          <img src={require("../../assets/img/arrow.svg").default} alt="Arrow" />
        </button>
      </div>
    )
  );
}

export default UpButton;
