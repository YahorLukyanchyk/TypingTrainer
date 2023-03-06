import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "react-auth-kit";

import "./App.scss";

import deviceType from "./utils/findDeviceType";

import NotFound from "./components/not-found/not-found";
import Modal from "./components/modal/modal";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import UpButton from "./components/up-button/up-button";

const device = deviceType();

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");
  const [userData, setUserData] = useState({
    data: {
      username: "",
      status: null,
    },
  });
  const [loggedStatus, setLoggedStatus] = useState(false);

  //console.log(userData);
  //console.log(loggedStatus);

  function getUserData(userData) {
    setUserData(userData);
  }

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
    <AuthProvider 
    authType = {"cookie"}
    authName = {"AUTH"}
    cookieDomain = {window.location.hostname}
    cookieSecure = {false}
    >
      <BrowserRouter>
        <div className="wrapper">
          <Modal
            modalVisible={modalVisible}
            modalType={modalType}
            resetModalVisible={resetModalVisible}
            getUserData={getUserData}
            setLoggedStatus={setLoggedStatus}
            userData={userData}
          />
          <Header
            changeModalVisible={changeModalVisible}
            userData={userData}
            loggedStatus={loggedStatus}
            resetModalVisible={resetModalVisible}
          />
          <main className="main">
            <div className="main__container">
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route
                  path="/"
                  element={
                    device === "desktop" ? (
                      <Home changeModalVisible={changeModalVisible} />
                    ) : (
                      <Navigate replace to={"notfound"} />
                    )
                  }
                />
              </Routes>
            </div>
          </main>
          <UpButton />
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
