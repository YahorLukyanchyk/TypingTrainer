import { useRef } from "react";
import { useSignIn } from "react-auth-kit";

const logURL = "http://26.189.24.33:8080/auth/login";

function LoginForm({ changeModalVisible, setPostResult }) {
  const email = useRef(null);
  const password = useRef(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  const signIn = useSignIn();

  async function getData() {
    let result;
    const postData = {
      email: email.current.value,
      password: password.current.value,
    };

    console.log(postData);

    try {
      const res = await fetch(logURL, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
          Authorization:
            "Basic " + window.btoa(postData.email + ":" + postData.password),
        },
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        result = { data: res };
      }

      const data = await res.json();

      result = {
        status: res.status,
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        data: data,
      };

      signIn({
        token: result.data.jwtToken,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: result.data.userDTO,
      });
      changeModalVisible();

      setPostResult(fortmatResponse(result));
    } catch (err) {
      setPostResult(err.message);
    }
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
        <button className="button" onClick={getData}>
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
