import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useIsAuthenticated, useAuthUser } from "react-auth-kit";

import "./App.scss";

import deviceType from "./utils/findDeviceType";

import NotFound from "./components/not-found/not-found";
import Modal from "./components/modal/modal";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import UpButton from "./components/up-button/up-button";
import Profile from "./components/profile/profile";
import Courses from "./components/profile/courses/courses";
import Modes from "./components/profile/modes/modes";
import Settings from "./components/profile/settings/settings";
import PlayRoom from "./components/playroom/playroom";

const device = deviceType();

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("stats");
  function changeModalVisible(e) {
    document.body.classList.toggle("overflow-hidden");
    setModalVisible(!modalVisible);
    setModalType(e.target.id);
  }

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Modal
          modalVisible={modalVisible}
          changeModalVisible={changeModalVisible}
          modalType={modalType}
        />
        <Header changeModalVisible={changeModalVisible} />
        <main className="main">
          <div className="main__container">
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route
                path="/"
                element={<Home changeModalVisible={changeModalVisible} />}
              />
              <Route path="profile/*" element={<Profile />}>
                <Route path="courses" element={<Courses />}></Route>
                <Route path="modes" element={<Modes />}></Route>
                <Route path="settings" element={<Settings />}></Route>
              </Route>
              <Route path="playroom" element={<PlayRoom modalVisible={modalVisible}/>} />
            </Routes>
          </div>
        </main>
        <UpButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
