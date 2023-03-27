import { useRef } from "react";

const regURL = "http://26.189.24.33:8080/auth/register";

function RegForm({
  getUserData,
  setPostResult,
}) {
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  async function postData() {

    let result;
    const postData = {
      name: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    try {
      const res = await fetch(regURL, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(postData),
      });

      const data = await res.json();

      result = {
        status: res.status,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        data: data,
      };

      getUserData(result);

      setPostResult(fortmatResponse(result));
    } catch (err) {
      setPostResult(err.message);
    }
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
          <input type="text" className="input input-code" placeholder="Код" />
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
  );
}

export default RegForm;
