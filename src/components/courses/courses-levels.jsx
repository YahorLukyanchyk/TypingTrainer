import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import CourseLevel from "./course-level";

import "./courses.scss";

function CoursesLevels() {
  const [exercises, setExercises] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const location = useLocation(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getExercises = async () => {
      try {
        const token = Cookies.get("AUTH");
        const response = await fetch(
          `http://26.189.24.33:8080/exercises/training?userId=${location.state.userId}&courseId=${location.state.courseId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();
        setExercises(result);
      } catch {
        console.log("Error!");
      }
      setLoadingStatus(false);
    };

    getExercises();
  }, []);

  function getText(event) {
    event.preventDefault();
    fetch("", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    navigate("/playroom");
  }

  return (
    <>
      {loadingStatus ? (
        <h1>Loading...</h1>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          {console.log(exercises)}
          {exercises.map((exercise) => (
            <CourseLevel key={exercise.exerciseId}>
              <form className="coruses-level level">
                <label
                  className="level-heading"
                  style={{ fontSize: "24px", fontWeight: "800" }}
                >
                  Уровень {exercise.exerciseId}
                </label>
                <button
                  className="button"
                  disabled={exercise.access ? false : true}
                >
                  Начать
                </button>
              </form>
            </CourseLevel>
          ))}
        </div>
      )}
    </>
  );
}

export default CoursesLevels;
