import { useState, useRef } from "react";
import { useSignIn } from "react-auth-kit";

import "./modal-sign-in.scss";

function scrollModal() {
  let signInRowBlock = document.querySelector(".sign-in__row-block");
  signInRowBlock.classList.toggle("sign-in-scroll-active");
}

function ModalSignIn({
  getUserData,
  setLoggedStatus,
  userData,
  resetModalVisible,
}) {
  // default params for fetch
  const regURL = "http://26.189.24.33:8080/auth/register";
  const logURL = "http://26.189.24.33:8080/auth/login";

  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const signIn = useSignIn();

  const [postResult, setPostResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  // fetch method POST for putting data to remote server
  async function postData() {
    // get needed fields

    let result;
    const postData = {
      email: email.current.value,
      password: password.current.value,
    };

    // POST data
    try {
      const res = await fetch(regURL, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(postData),
      });

      // show posted data in the console
      // console.log(JSON.stringify(postData));

      // show error message (code + status) in the console
      if (!res.ok) {
        result = { data: res };
        getUserData(result);
      }

      // waiting for the repsonce from the server
      const data = await res.json();

      // get result from the server
      result = {
        status: res.status,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        data: data,
      };

      getUserData(result);
      console.log(result);
      setPostResult(fortmatResponse(result));
    } catch (err) {
      setPostResult(err.message);
    }
  }

  // fetch method POST for getting data from remote server
  async function getData() {
    // get needed fields
    let result;

    const postData = {
      username: username.current.value,
      password: password.current.value,
    };

    // POST data
    try {
      const res = await fetch(logURL, {
        method: "post",

        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(postData),
      });

      signIn({
        token: res.body.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: postData.email },
      });

      sessionStorage.setItem("userdetails", JSON.stringify(postData));

      // show error message (code + status) in the console
      if (!res.ok) {
        result = { data: res, status: res.status };
        getUserData(result);
      }

      // waiting for the repsonce from the server
      const data = await res.json();

      // get result from the server
      result = {
        status: res.status,
        data: data,
      };

      // changing userData and loggedStatus values
      getUserData(result);
      console.log(result);
      if (result.status === 200) {
        setLoggedStatus(true);
        resetModalVisible(false);
      }
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
          <div className="sign-in__form">
            <input
              type="email"
              className="input"
              placeholder="Почта"
              ref={username}
            />
            <input
              type="password"
              className="input"
              placeholder="Пароль"
              ref={password}
            />
            <button className="button" onClick={getData}>
              Войти
            </button>
            {userData.data.status === 404 && <p>{userData.data.message}</p>}
            {userData.status === 200 && <p>{userData.data.message}</p>}
          </div>
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
          <div className="sign-in__form">
            <input
              type="email"
              className="input"
              placeholder="Почта"
              ref={email}
            />
            <input
              type="password"
              className="input"
              placeholder="Пароль"
              ref={password}
            />
            {userData.status === 409 && <p>{userData.data.message}</p>}
            {userData.status === 401 && <p>{userData.data.message}</p>}
            {userData.status === 200 && <p>{userData.data.message}</p>}
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
          </div>
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
