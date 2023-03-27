import { useIsAuthenticated } from "react-auth-kit";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Aside from "../aside/aside";
import Modes from "./modes/modes";
import Courses from "./courses/courses";
import Settings from "./settings/settings";

import "./profile.scss";

function Profile() {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated()) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="profile__block">
        <Aside />
        <div className="profile__settings">
          <Routes path="profile" element={<Profile />}>
            <Route path="courses" element={<Courses />}></Route>
            <Route path="modes" element={<Modes />}></Route>
            <Route path="settings" element={<Settings />}></Route>
          </Routes>
        </div>
      </div>
    );
  }
}

export default Profile;
