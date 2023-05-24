import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";

import "./App.scss";

import deviceType from "./utils/findDeviceType";

import NotFound from "./components/not-found/not-found";
import Modal from "./components/modal/modal";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import UpButton from "./components/up-button/up-button";
import Profile from "./components/profile/profile";
import ProfileCourses from "./components/profile/profile-courses/profile-courses";
import ProfileModes from "./components/profile/profile-modes/profile-modes";
import ProfileSettings from "./components/profile/profile-settings/profile-settings";
import PlayRoom from "./components/playroom/playroom";
import Training from "./components/training/training";
import Courses from "./components/courses/courses";
import Modes from "./components/modes/modes";
import PasswordReset from "./components/password-reset/password-reset";

const device = deviceType();

function App() {
  const { token } = useParams();

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Modal />
        <Header />
        <main className="main">
          <div className="main__container">
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="training" element={<Training />} />
              <Route path="courses" element={<Courses />} />
              <Route path="modes" element={<Modes />} />
              <Route path="profile/*" element={<Profile />}>
                <Route path="courses" element={<ProfileCourses />}></Route>
                <Route path="modes" element={<ProfileModes />}></Route>
                <Route path="settings" element={<ProfileSettings />}></Route>
              </Route>
              <Route path="playroom" element={<PlayRoom />} />
              <Route path="password-reset" element={<PasswordReset />} />
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
