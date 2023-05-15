import "./home.scss";

import { Modal } from "react-bootstrap";
import Typed from "typed.js";
import { useState, useEffect, useRef } from "react";

function Home({ changeModalVisible }) {
  const [show, setShow] = useState({
    modal1: false,
    modal2: false,
  });

  const handleClose = () => setShow(false);
  const handleShow = (modal) => {
    setShow({...show, [modal]: true})
  };

  const typedText = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedText.current, {
      strings: [
        "Cовременный сервис для тренировки слепой печати. С нами ты перестанешь смотреть на клавиатуру!",
      ],
      startDelay: 300,
      typeSpeed: 75,
      backSpeed: 35,
      backDelay: 300,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Modal
        show={show.modal1}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        jajajaja
        <button onClick={handleClose}>close</button>
      </Modal>
      <Modal
        show={show.modal2}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        pipipupu
        <button onClick={handleClose}>close</button>
      </Modal>
      <section className="section__welcome">
        <div className="section__wrapper">
          <div className="section__content-block">
            <h1>TypingTrainer</h1>
            <div className="section__welcome-text">
              <p ref={typedText}></p>
            </div>
            <button id="course" className="button" onClick={() =>handleShow('modal1')}>
              Регистрация
            </button>
          </div>
        </div>
      </section>
      <section className="section__track">
        <div className="section__wrapper">
          <div className="section__image-wrapper">
            <img
              src={require("../../assets/img/cats-1.svg").default}
              alt="Cats"
            />
          </div>
          <div className="section__content-wrapper">
            <h2>Отслеживание достижений и прогресса</h2>
            <p>
              Наша система позволяет Вам отслеживать Ваши достижения и прогресс.
              Автоматически подсчитываемая система скорости и точности позволяет
              легко отслеживать свой успех.
            </p>
          </div>
        </div>
      </section>
      <section className="section__our-goal">
        <div className="section__wrapper">
          <h2>
            Наша цель - сделать TypingTrainer лучшим инструментом для улучшения
            навыков слепой печати. Присоединяйтесь к нам, чтобы улучшить свои
            навыки!
          </h2>
          <button className="button" onClick={() =>handleShow('modal2')}>
            Регистрация
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
