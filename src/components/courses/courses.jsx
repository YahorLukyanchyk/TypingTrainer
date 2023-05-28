import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import CoursesBlock from "./courses-block/courses-block";
import Cookies from "js-cookie";

import "./courses.scss";

function Courses({ changeModalVisible }) {
  const [courses, setCourses] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const navigate = useNavigate();
  const auth = useAuthUser();

  useEffect(() => {
    const getCourses = async () => {
      try {
        const token = Cookies.get("AUTH");
        const response = await fetch(`http://26.189.24.33:8080/courses`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        setCourses(result);
      } catch {
        console.log("Error!");
      }
      setLoadingStatus(false);
    };

    getCourses();
  }, []);

  function getLevels(courseId) {
    const userId = auth().id;

    navigate("levels", {
      state: {
        courseId: courseId,
        userId: userId,
      },
    });
  }

  return (
    <>
      {loadingStatus ? (
        <h1>Loading...</h1>
      ) : (
        courses.map((course) => (
          <CoursesBlock key={course.id}>
            <div className="course-block__wrapper">
              <h2>{course.name}</h2>
              <div className="course-block__inner-wrapper">
                <img
                  src={require("../../assets/img/rus_course.png")}
                  alt="Course"
                />
                <div className="course-block__content">
                  <p>{course.description}</p>
                  <div className="course-block__action">
                    <button
                      to="levels"
                      className="button"
                      onClick={() => getLevels(course.id)}
                    >
                      Начать курс
                    </button>
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
        ))
      )}
    </>
  );
}

export default Courses;
