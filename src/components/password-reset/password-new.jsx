import { useState, useRef } from "react";

function PasswordNew() {
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
      <form>
        <input type="text" name="token" ref={token} />
        <input type="password" name="password" ref={password} />
        <input
          type="password"
          name="confirmedPassword"
          ref={confirmedPassword}
        />
        <button type="submit" onClick={(event) => newPassword(event)}>
          Сбросить пароль
        </button>
      </form>
      <span>{responce === null ? "" : responce.message}</span>
    </>
  );
}

export default PasswordNew;
