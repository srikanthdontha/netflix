import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`navBar ${show && "nav_black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("./")}
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => history.push("./profile")}
          className="nav_avatar"
          src="https://i.pinimg.com/originals/f6/97/4e/f6974e017d3f6196c4cbe284ee3eaf4e.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default NavBar;
