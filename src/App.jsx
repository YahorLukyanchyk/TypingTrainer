import { useState } from "react";

import "./App.scss";

import deviceType from "./utils/findDeviceType";
import Modal from "./components/modal/modal";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import UpButton from "./components/up-button/up-button";

deviceType();

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");

  function changeModalVisible(event) {
    setModalVisible(!modalVisible);
    document.body.classList.add("overflow-hidden");
    // console.log(event.currentTarget.id);
    if (event.currentTarget.id === "sign-in") {
      setModalType("sign-in");
    }
    if (event.currentTarget.id === "course") {
      setModalType("course");
    }
  }

  function resetModalVisible() {
    setModalVisible(false);
    setModalType("");
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <div className="wrapper">
      <Modal
        modalVisible={modalVisible}
        modalType={modalType}
        resetModalVisible={resetModalVisible}
      />
      <Header changeModalVisible={changeModalVisible} />
      <main className="main">
        <div className="main__container">
          <Home changeModalVisible={changeModalVisible} />
        </div>
      </main>
      <UpButton />
      <Footer />
    </div>
  );
}

export default App;
