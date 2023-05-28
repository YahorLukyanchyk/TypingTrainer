import { useState, useEffect, useRef } from "react";
import { useStopwatch } from "react-timer-hook";
import Keyboard from "react-simple-keyboard";
import Hotkeys from "react-hot-keys";
import "react-simple-keyboard/build/css/index.css";
import "./playroom.scss";

import counter from "../../utils/counter";
import content from "../../data/text";

function PlayRoom() {
  // let data = "Hello World";
  let data =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  data = Array.from(data);

  const [onKeyPressStatus, setOnKeyPressStatus] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [layout, setLayout] = useState("default");
  const [charStates, setCharStates] = useState(Array(data.length).fill(false));
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const correctCharsCount = useRef(0);
  const mistakesCount = useRef(0);
  const keyPressCount = useRef(0);
  const { seconds, minutes, pause, reset } = useStopwatch({
    autoStart: false,
    format: "12-hour",
  });
  let mistakes = (
    (mistakesCount.current / keyPressCount.current) *
    100
  ).toFixed(1);
  let speed = (
    (correctCharsCount.current / (minutes * 60 + seconds)) *
    60
  ).toFixed(1);

  let result = {
    time: null,
    mistakes: null,
    speed: null,
  };

  function onKeyPress(button) {
    let key = button;
    const currentChar = data[currentCharIndex];

    if (
      button === "{space}" ||
      button === "{shift}" ||
      button === "{shiftleft}" ||
      button === "{shiftright}" ||
      button === "{capslock}" ||
      button === "{tab}" ||
      button === "{enter}"
    ) {
      keyPressCount.current = keyPressCount.current + 0;
    } else if (key !== currentChar) {
      mistakesCount.current = mistakesCount.current + 1;
      keyPressCount.current = keyPressCount.current + 1;
    } else {
      correctCharsCount.current = correctCharsCount.current + 1;
      keyPressCount.current = keyPressCount.current + 1;
    }

    shiftHandler(button);

    if (button === "{space}") {
      key = " ";
    }

    if (key === currentChar && currentCharIndex < data.length) {
      setCurrentCharIndex(currentCharIndex + 1);
      setCharStates((prevState) => {
        const newState = [...prevState];
        newState[currentCharIndex] = true;
        return newState;
      });
    }

    if (currentCharIndex === data.length - 1) {
      gameEnd();
    }
  }

  function changeOnKeyPressStatus() {
    setOnKeyPressStatus(true);
  }

  function gameStart() {
    timerReset();
    timerPause();
    setButtonDisabled(true);
    counter();
    keyPressCount.current = 0;
    correctCharsCount.current = 0;
    mistakesCount.current = 0;
    setCharStates([]);
    setCurrentCharIndex(0);
    setTimeout(changeOnKeyPressStatus, 4000);
    setTimeout(timerReset, 4000);
  }

  function gameEnd() {
    console.log("finished");
    result = {
      time: `${minutes < 10 ? `0${minutes}` : minutes} : ${
        seconds < 10 ? `0${seconds}` : seconds
      }`,
      mistakes,
      speed,
    };
    console.log(result);
    setOnKeyPressStatus(false);
    setButtonDisabled(false);
    setLayout("default");
    timerPause();
  }

  function shiftHandler(button) {
    if (
      button === "{shift}" ||
      button === "{shiftleft}" ||
      button === "{shiftright}" ||
      button === "{capslock}"
    ) {
      layout === "default" ? setLayout("shift") : setLayout("default");
    }
  }

  function timerPause() {
    pause();
  }

  function timerReset() {
    reset();
  }

  /*
  document.addEventListener("keydown", (event) => {
    // Disabling keyboard input, as some keys (like F5) make the browser lose focus.
    // If you're like to re-enable it, comment the next line and uncomment the following ones
    event.preventDefault();
  });
  */

  return (
    <div className="playroom">
      <div className="playroom__stats stats">
        <div className="stats__item">
          <img
            src={require("../../assets/img/speed.svg").default}
            alt="Stats"
          />
          <div className="stats__content">
            <span className="stats__title">Скорость печати</span>
            <div className="status__param">
              <span>{isNaN(speed) ? `0 зн./мин` : `${speed} зн./мин`}</span>
            </div>
          </div>
        </div>
        <div className="stats__item">
          <img
            src={require("../../assets/img/mistake.svg").default}
            alt="Stats"
          />
          <div className="stats__content">
            <span className="stats__title">Кол-во ошибок</span>
            <div className="status__param">
              <span>{isNaN(mistakes) ? "0%" : `${mistakes}%`}</span>
            </div>
          </div>
        </div>
        <div className="stats__item">
          <img
            src={require("../../assets/img/timer.svg").default}
            alt="Stats"
          />
          <div className="stats__content">
            <span className="stats__title">Время</span>
            <div className="status__param">
              <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
              <span>:</span>
              <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text__block">
        <div className="text__data">
          {data.map((char, index) => {
            const isCurrentChar = currentCharIndex === index;
            const isCorrectChar = charStates[index];
            const style = isCurrentChar
              ? { backgroundColor: "rgba(112, 244, 165, 1)" }
              : isCorrectChar
              ? { color: "rgba(112, 244, 165, 1)" }
              : {};
            return (
              <span key={index} className="char" style={style}>
                {char}
                {isCurrentChar && (
                  <input
                    type="text"
                    className="hidden-input"
                    onKeyDown={() => onKeyPress()}
                  />
                )}
              </span>
            );
          })}
        </div>
      </div>
      <button
        className="button"
        onClick={() => gameStart()}
        disabled={buttonDisabled ? true : false}
      >
        Начать!
      </button>
      <Keyboard
        onKeyPress={onKeyPressStatus ? onKeyPress : null}
        physicalKeyboardHighlight={true}
        physicalKeyboardHighlightPress={true}
        layout={{
          default: [
            "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
            "{tab} q w e r t y u i o p [ ] \\",
            "{capslock} a s d f g h j k l ; ' {enter}",
            "{shiftleft} z x c v b n m , . / {shift}",
            "controlleft @ {space}",
          ],
          russian: [
            "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
            "{tab} й ц у к е н г ш щ з х ъ \\",
            "{capslock} a s d f g h j k l ; ' {enter}",
            "{shiftleft} z x c v b n m , . / {shift}",
            "ctrl @ {space}",
          ],
          shift: [
            "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
            "{tab} Q W E R T Y U I O P { } |",
            '{capslock} A S D F G H J K L : " {enter}',
            "{shiftleft} Z X C V B N M < > ? {shift}",
            "ctrl @ {space}",
          ],
        }}
        layoutName={layout}
      />
      <Hotkeys keyName="shiftleft" onKeyUp={() => setLayout("russian")} />
    </div>
  );
}

export default PlayRoom;
