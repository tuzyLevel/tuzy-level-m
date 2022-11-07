import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.title}>
        <a href="/">
          <h1>RealChat</h1>
        </a>
      </div>
      <div className={classes.menues}>
        <div className={`${classes.menues_menu} ${classes.login} `}>
          <a href="/login">
            <h2>Login</h2>
          </a>
        </div>
        <div className={`${classes.menues_menu} ${classes.friends_list}`}>
          <a href="/friends">
            <h2>Friends</h2>
          </a>
        </div>
        <div className={`${classes.menues_menu} ${classes.chat_list}`}>
          <a href="/chats">
            <h2>Chats</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
