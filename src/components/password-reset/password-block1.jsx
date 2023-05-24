import { useState, useRef } from "react";

function PasswordBlock1() {
  const [responce, setResponse] = useState(null);

  const email = useRef(null);

  function resetPassword(event) {
    event.preventDefault();

    fetch(
      `http://26.189.24.33:8080/auth/password-reset?email=${email.current.value}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => setResponse(data))
      .catch((error) => setResponse(error));
  }

  return (
    <>
      <form className="password-block">
        <label>1. Введите почту для получения токена</label>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Почта"
          ref={email}
        />
        <button
          className="button"
          type="submit"
          onClick={(event) => resetPassword(event)}
        >
          Выслать токен
        </button>
        <span>{responce === null ? "" : responce.message}</span>
      </form>
    </>
  );
}

export default PasswordBlock1;
