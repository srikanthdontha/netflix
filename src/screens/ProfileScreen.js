import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "./contentScreen/service/firebase";
import NavBar from "./contentScreen/NavBar";
import "./ProfileScreen.css";
import { useHistory } from "react-router";

function ProfileScreen() {
  const history = useHistory();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
    history.push("./");
  };
  return (
    <div className="profileScreen">
      <NavBar />
      <div className="profileScreen_body">
        <h1>Edit profile</h1>
        <div className="profileScreen_info">
          <img src="https://i.pinimg.com/originals/f6/97/4e/f6974e017d3f6196c4cbe284ee3eaf4e.png" />
          <div className="profileScreen_detalis">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              <button onClick={signOut} className="profileScreen_signOut">
                SIGN OUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
