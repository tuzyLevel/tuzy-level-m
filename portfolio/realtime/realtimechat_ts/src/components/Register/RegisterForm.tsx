import React from "react";
import classes from "./RegisterForm.module.css";

const RegisterForm: React.FC = (props) => {
  return (
    <div className={classes.register_form_container}>
      <form>
        <div>
          <label htmlFor="id">아이디</label>
          <input id="id" name="id" />
        </div>
        <div>
          <label>비밀번호</label>
          <input id="pwd" name="pwd" />
        </div>
        <div>
          <label>비밀번호 확인</label>
          <input id="valid" name="valid" />
        </div>
        <button type="submit">회원가입</button>
        <button type="button">취소</button>
      </form>
    </div>
  );
};

export default RegisterForm;
