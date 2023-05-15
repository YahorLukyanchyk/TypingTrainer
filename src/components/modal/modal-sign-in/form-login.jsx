import { useState, useRef } from "react";
import { useSignIn } from "react-auth-kit";

const logURL = "http://26.189.24.33:8080/auth/login";

function LoginForm({ handleClose }) {
  const [response, setResponse] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const signIn = useSignIn();

  function login(event) {
    event.preventDefault();

    fetch(logURL, {
      method: "POST",
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
        Authorization:
          "Basic " +
          window.btoa(email.current.value + ":" + password.current.value),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.userDTO.enabled === false) {
          setResponse({ message: "Email не был подтвержден!",});
        } else {
          signIn({
            token: data.jwtToken,
            expiresIn: 3600,
            tokenType: "Bearer",
            authState: data.userDTO,
          });

          handleClose();
        }
        setResponse(data);

        return data;
      })
      .catch((error) => setResponse(error));
  }

  return (
    <div className="sign-in__login">
      <h1>Вход</h1>
      <div className="sign-in__form">
        <input type="email" className="input" placeholder="Почта" ref={email} />
        <input
          type="password"
          className="input"
          placeholder="Пароль"
          ref={password}
        />
        <div className="sign-in__verification">
          <span>{response === null ? "" : response.message}</span>
        </div>
        <button className="button" onClick={(event) => login(event)}>
          Войти
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

export default LoginForm;
