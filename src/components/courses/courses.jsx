import CoursesBlock from "./courses-block/courses-block";

function Courses({ changeModalVisible }) {
  return (
    <>
      <CoursesBlock>
        <div className="course-block__wrapper">
          <h2>Курс слепой печати для русской раскладки</h2>
          <div className="course-block__inner-wrapper">
            <img
              src={require("../../assets/img/rus_course.png")}
              alt="Course"
            />
            <div className="course-block__content">
              <p>
                ЙЦУКЕН – это наиболее распространенная раскладка клавиатуры для
                русского языка. Курс слепой печати для русской раскладки ЙЦУКЕН
                поможет вам освоить быстрый и безошибочный набор текста на
                русском языке.
              </p>
              <div className="course-block__action">
                <button className="button">Начать курс</button>
                <button
                  id="course"
                  className="inline-button"
                  onClick={changeModalVisible}
                >
                  Подробнее о курсе
                </button>
              </div>
            </div>
          </div>
        </div>
      </CoursesBlock>
      <CoursesBlock>
        <div className="course-block__wrapper">
          <h2>Курс слепой печати для английской раскладки</h2>
          <div className="course-block__inner-wrapper">
            <img
              src={require("../../assets/img/en_course.png")}
              alt="Course"
            />
            <div className="course-block__content">
              <p>
                Английская раскладка QWERTY была придумана в 1873 году и на
                данный момент является самой популярной. Пройдите данный курс,
                чтобы научиться быстро идентифицировать расположения клавиш, а
                также использовать шорткаты, необходимые для ускорения печати.
              </p>
              <div className="course-block__action">
                <button className="button">Начать курс</button>
                <button
                  id="course"
                  className="inline-button"
                  onClick={changeModalVisible}
                >
                  Подробнее о курсе
                </button>
              </div>
            </div>
          </div>
        </div>
      </CoursesBlock>
    </>
  );
}

export default Courses;
