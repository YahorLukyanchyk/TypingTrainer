import { useState, useRef } from 'react'

import "./modal-sign-in.scss";

function scrollModal() {
  let signInRowBlock = document.querySelector(".sign-in__row-block");
  signInRowBlock.classList.toggle("sign-in-scroll-active");
}

function ModalSignIn() {
  const baseURL = "http://localhost:8080/auth/register";

  const email = useRef(null);
  const password = useRef(null);

  const [postResult, setPostResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  async function postData() {
    const postData = {
      email: email.current.value,
      password: password.current.value,
    };

    try {
      const res = await fetch(baseURL, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(postData),
      });

      console.log(JSON.stringify(postData));

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }

      const data = await res.json();

      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        data: data,
      };

      setPostResult(fortmatResponse(result));
    } catch (err) {
      setPostResult(err.message);
    }
  }

  return (
    <div className="modal__sign-in sign-in__modal">
      <div className="sign-in__row-block">
        <div className="sign-in__login">
          <h1>Вход</h1>
          <form action="" className="sign-in__form">
            <input type="email" className="input" placeholder="Почта" />
            <input type="password" className="input" placeholder="Пароль" />
            <button type="submit" className="button" disabled>
              Войти
            </button>
          </form>
          <div className="sign-in__or-block">
            <div className="sign-in__or-text-block">
              <span className="sign-in__or-text">или</span>
            </div>
          </div>
          <div className="sign-in__with-block">
            <button className="button sing-in__google">Google</button>
            <button className="button sing-in__facebook">Facebook</button>
          </div>
        </div>
        <button className="sign-in__scroll" onClick={scrollModal}>
          <div className="sign-in__scroll-to-reg">
            <h2>Регистрация</h2>{" "}
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
        <div className="sign-in__reg">
          <h1>Регистрация</h1>
          <form action="" className="sign-in__form">
            <input type="email" className="input" placeholder="Почта" ref={email}/>
            <input type="password" className="input" placeholder="Пароль" ref={password}/>
            <div className="sign-in__verification">
              <input
                type="text"
                className="input input-code"
                placeholder="Код"
              />
              <button type="submit" className="button button-code" disabled>
                Отправить код
              </button>
            </div>
            <button type="submit" className="button" onClick={postData}>
              Зарегистрироваться
            </button>
          </form>
          <div className="sign-in__or-block">
            <div className="sign-in__or-text-block">
              <span className="sign-in__or-text">или</span>
            </div>
          </div>
          <div className="sign-in__with-block">
            <button className="button sing-in__google">Google</button>
            <button className="button sing-in__facebook">Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalSignIn;
