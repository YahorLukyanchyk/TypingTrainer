import { useState, useRef } from "react";

import PasswordBlock1 from "./password-block1";
import PasswrodBlock2 from "./password-block2";
import "./password-reset.scss";

function PasswordReset() {
  return (
    <section>
      <div className="section__wrapper">
        <h1 className="password-heading">Форма сброса пароля</h1>
        <div className="password-reset">
          <PasswordBlock1 />
          <div className="middle-border"></div>
          <PasswrodBlock2 />
        </div>
      </div>
    </section>
  );
}

export default PasswordReset;
