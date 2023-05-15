import { useState, useRef } from "react";

const regURL = "http://26.189.24.33:8080/auth/register";

function RegForm() {
  const [response, setResponse] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  function register(event) {
    event.preventDefault();

    fetch(regURL, {
      method: "POST",
      body: JSON.stringify({
        name: username.current.value,
        email: email.current.value,
        password: password.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
    })
      .then((response) => response.json())
      .then((data) => setResponse(data))
      .catch((error) => setResponse(error));
  }

  return (
    <div className="sign-in__reg">
      <h1>Регистрация</h1>
      <div className="sign-in__form">
        <input type="text" className="input" placeholder="Имя" ref={username} />
        <input type="email" className="input" placeholder="Почта" ref={email} />
        <input
          type="password"
          className="input"
          placeholder="Пароль"
          ref={password}
        />
        <div className="sign-in__verification">
          <span>
            {response === null ? "" : response.message}
          </span>
        </div>
        <button
          type="submit"
          className="button"
          onClick={(event) => register(event)}
        >
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
  );
}

export default RegForm;
