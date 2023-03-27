import { useState, useRef } from "react";
import { useStopwatch } from "react-timer-hook";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./playroom.scss";

import counter from "../../utils/counter";
import content from "../../data/text";

function PlayRoom({ modalVisible }) {
  const [text, setText] = useState("");
  const [onKeyPressStatus, setOnKeyPressStatus] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [layout, setLayout] = useState("default");
  const inexCount = useRef(0);

  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false, format: "12-hour" });

  let time;

  let data = "Hello World!";
  // "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  data = Array.from(data);

  function onKeyPress(button) {
    console.log(button);
    let key = button;
    shiftHandler(button);
    if (button === "{space}") {
      key = " ";
    }
    if (key === data[inexCount.current]) {
      setText(text + key);
      inexCount.current = inexCount.current + 1;
    }
    if (inexCount.current === data.length) {
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
    setText("");
    setTimeout(changeOnKeyPressStatus, 4000);
    setTimeout(timerReset, 4000);
  }

  function gameEnd() {
    console.log("finished");
    time = `${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
    console.log(time);
    inexCount.current = 0;
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

  document.addEventListener("keydown", (event) => {
    // Disabling keyboard input, as some keys (like F5) make the browser lose focus.
    // If you're like to re-enable it, comment the next line and uncomment the following ones
    event.preventDefault();
  });

  return (
    <div className="playroom">
      <div className="playroom__stats stats">
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
        <div className="text__data">{data}</div>
        <div className="text__typing">{text}</div>
      </div>
      <button
        className="button"
        onClick={gameStart}
        disabled={buttonDisabled ? true : false}
      >
        Start
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
            ".com @ {space}",
          ],
          shift: [
            "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
            "{tab} Q W E R T Y U I O P { } |",
            '{capslock} A S D F G H J K L : " {enter}',
            "{shiftleft} Z X C V B N M < > ? {shift}",
            ".com @ {space}",
          ],
        }}
        layoutName={layout}
      />
    </div>
  );
}

export default PlayRoom;
