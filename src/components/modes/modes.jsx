import ModesBlock from "./modes-block/modes-block";

function Modes({ changeModalVisible }) {
  return (
    <>
      <ModesBlock>
        <div className="mode-block__wrapper">
          <div className="mode-block__inner-wrapper">
            <img src={require("../../assets/img/en_course.png")} alt="mode" />
            <div className="mode-block__content">
              <h2>Обычный режим</h2>
              <p>
                Вам будет дан небольшой отрывок текста. Напечатайте его и
                узнайте, с какой скоростью и точностью вы клацаете по клавишам
                на данный момент.
              </p>
              <div className="mode-block__action">
                <button className="button">Начать</button>
                <button
                  id="mode"
                  className="inline-button"
                  onClick={changeModalVisible}
                >
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModesBlock>
      <ModesBlock>
        <div className="mode-block__wrapper">
          <div className="mode-block__inner-wrapper">
            <img src={require("../../assets/img/en_course.png")} alt="mode" />
            <div className="mode-block__content">
              <h2>Режим “Без ошибок”</h2>
              <p>
                Вы наберете текст из нескольких абзацев и пройдете режим только
                в том случае, если не допустите ни одной ошибки.
              </p>
              <div className="mode-block__action">
                <button className="button">Начать</button>
                <button
                  id="mode"
                  className="inline-button"
                  onClick={changeModalVisible}
                >
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModesBlock>
      <ModesBlock>
        <div className="mode-block__wrapper">
          <div className="mode-block__inner-wrapper">
            <img src={require("../../assets/img/en_course.png")} alt="mode" />
            <div className="mode-block__content">
              <h2>Режим “100 символов”</h2>
              <p>
                В данном режиме вы должны будете набрать текст из рандомных 100
                символов. Отличный способ проверить вашу внимательность и
                точность печати.
              </p>
              <div className="mode-block__action">
                <button className="button">Начать</button>
                <button
                  id="mode"
                  className="inline-button"
                  onClick={changeModalVisible}
                >
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModesBlock>
      <ModesBlock>
        <div className="mode-block__wrapper">
          <div className="mode-block__inner-wrapper">
            <img src={require("../../assets/img/en_course.png")} alt="mode" />
            <div className="mode-block__content">
              <h2>Режим “Только цифры”</h2>
              <p>
                Данный режим печати позволит вам научится быстро печатать цифры
                без необходимости смотреть на клавиши.
              </p>
              <div className="mode-block__action">
                <button className="button">Начать</button>
                <button
                  id="mode"
                  className="inline-button"
                  onClick={changeModalVisible}
                >
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModesBlock>
    </>
  );
}

export default Modes;
