import { useState, useRef } from "react";

function PasswordReset() {
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
      <form>
        <input type="text" name="email" ref={email} />
        <button type="submit" onClick={(event) => resetPassword(event)}>
          Сбросить пароль
        </button>
      </form>
      <span>{responce === null ? "" : responce.message}</span>
    </>
  );
}

export default PasswordReset;
