import { useState, useRef } from "react";

function PasswrodBlock2() {
  const [responce, setResponse] = useState(null);

  const token = useRef(null);
  const password = useRef(null);
  const confirmedPassword = useRef(null);

  function newPassword(event) {
    event.preventDefault();

    fetch("http://26.189.24.33:8080/auth/password-reset", {
      method: "POST",
      body: JSON.stringify({
        token: token.current.value,
        password: password.current.value,
        confirmedPassword: confirmedPassword.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setResponse(data))
      .catch((error) => setResponse(error));
  }

  return (
    <>
      <form className="password-block">
        <label>2. Введите новый пароль используя токен</label>
        <input
          className="input"
          type="text"
          name="token"
          placeholder="Токен подтверждения"
          ref={token}
        />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Новый пароль"
          ref={password}
        />
        <input
          className="input"
          type="password"
          name="confirmedPassword"
          placeholder="Повторите новый пароль"
          ref={confirmedPassword}
        />
        <button
          className="button"
          type="submit"
          onClick={(event) => newPassword(event)}
        >
          Сбросить пароль
        </button>
        <span>{responce === null ? "" : responce.message}</span>
      </form>
    </>
  );
}

export default PasswrodBlock2;
