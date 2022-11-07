import React from "react";

import Card from "../Card/Card";
import classes from "./LoginModal.module.css";
interface LoginModalProps extends React.PropsWithChildren {}

const LoginModal: React.FC<LoginModalProps> = (props) => {
  return (
    <div className={classes.modal_container}>
      <form className={classes.form}>
        <div className={classes.form_element}>
          <label htmlFor="id">아이디</label>
          <input type="text" name="id" id="id" />
        </div>
        <div className={classes.form_element}>
          <label htmlFor="pwd">비밀번호</label>
          <input type="password" name="pwd" id="pwd" />
        </div>
        <div className={` ${classes.form_element} ${classes.form_buttons}`}>
          <button type="button" id="registerBtn">
            회원가입
          </button>
          <button type="submit" id="loginBtn">
            로그인
          </button>
          <button type="button" id="cancelBtn">
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginModal;
