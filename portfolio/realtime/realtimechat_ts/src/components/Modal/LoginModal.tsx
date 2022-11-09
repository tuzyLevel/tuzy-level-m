import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./LoginModal.module.css";
interface LoginModalProps extends React.PropsWithChildren {}

const LoginModal: React.FC<LoginModalProps> = (props) => {
  const navigation = useNavigate();
  const registerBtnClickHandler = () => {
    navigation("/register");
  };

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
          <button
            type="button"
            id="registerBtn"
            onClick={registerBtnClickHandler}
          >
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
