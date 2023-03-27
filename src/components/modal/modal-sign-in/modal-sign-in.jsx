import { useState } from "react";

import LoginForm from "./form-login";
import RegForm from "./form-reg";

import "./modal-sign-in.scss";

function scrollModal() {
  let signInRowBlock = document.querySelector(".sign-in__row-block");
  signInRowBlock.classList.toggle("sign-in-scroll-active");
}

function ModalSignIn({  changeModalVisible }) {
  const [postResult, setPostResult] = useState(null);

  return (
    <div className="modal__sign-in sign-in__modal">
      <div className="sign-in__row-block">
        <LoginForm
          changeModalVisible={changeModalVisible}
          setPostResult={setPostResult}
        />
        <button className="sign-in__scroll" onClick={scrollModal}>
          <div className="sign-in__scroll-to-reg">
            <h2>Регистрация</h2>
            <div className="button sign-in__scroll-to-button">
              <img
                src={require("../../../assets/img/arrow.svg").default}
                alt="Arrow"
              />
            </div>
          </div>
          <div className="sign-in__scroll-block"></div>
          <div className="sign-in__scroll-to-log">
            <h2>Вход</h2>{" "}
            <div className="button sign-in__scroll-to-button">
              <img
                src={require("../../../assets/img/arrow.svg").default}
                alt="Arrow"
              />
            </div>
          </div>
        </button>
        <RegForm setPostResult={setPostResult} />
      </div>
    </div>
  );
}

export default ModalSignIn;
