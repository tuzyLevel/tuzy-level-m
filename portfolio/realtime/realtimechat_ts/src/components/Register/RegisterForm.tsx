import React, { useRef, useState, useReducer } from "react";
import classes from "./RegisterForm.module.css";

interface IdState {
  isValid: boolean;
  isInserted: boolean;
}
interface Action {
  type: string;
}
const initialIdState: IdState = {
  isValid: false,
  isInserted: false,
};

function reducer(state: IdState, action: Action): IdState {
  switch (action.type) {
    case "IDLE":
      return initialIdState;
    case "INVALID":
      return { isValid: false, isInserted: true };
    case "VALID":
      return { isValid: true, isInserted: true };
    default:
      throw new Error("Unhandled action");
  }
}

const RegisterForm: React.FC = (props) => {
  const [idState, dispatch] = useReducer(reducer, initialIdState);
  const [pwdInputStatus, setPwdInputStatus] = useState<string>("");
  const [valInputStatus, setValInputStatus] = useState<string>("");

  const idRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const valRef = useRef<HTMLInputElement>(null);

  const registerFormSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const inputId = idRef.current!.value;
    const inputPwd = pwdRef.current!.value;
    const inputVal = valRef.current!.value;
    if (!inputVal) {
      valRef.current!.focus();
    }
    if (!inputPwd) {
      pwdRef.current!.focus();
    }
    if (!inputId) {
      dispatch({ type: "INVALID" });
      idRef.current!.focus();
    } else {
      dispatch({ type: "VALID" });
    }
  };

  const inputBlurHandler = (event: React.BaseSyntheticEvent) => {
    if (event.target.id === "id") {
      const inputId = idRef.current!.value;
      if (!inputId) {
        dispatch({ type: "INVALID" });
        idRef.current!.focus();
      } else {
        dispatch({ type: "VALID" });
      }
    } else if (event.target.id === "pwd") {
      console.log("pwd");
    } else if (event.target.id === "valid") {
      console.log("valid");
    }
  };

  return (
    <div className={classes.register_form_container}>
      <form onSubmit={registerFormSubmitHandler}>
        <div>
          <label htmlFor="id">아이디</label>
          <input
            type="text"
            id="id"
            name="id"
            ref={idRef}
            onBlur={inputBlurHandler}
          />
        </div>
        {idState.isInserted && !idState.isValid && (
          <span>사용할 아이디를 정확하게 입력해 주세요.</span>
        )}

        <div>
          <label htmlFor="pwd">비밀번호</label>
          <input
            type="password"
            id="pwd"
            name="pwd"
            ref={pwdRef}
            onBlur={inputBlurHandler}
          />
        </div>
        <div>
          <label htmlFor="valid">비밀번호 확인</label>
          <input
            type="password"
            id="valid"
            name="valid"
            ref={valRef}
            onBlur={inputBlurHandler}
          />
        </div>
        <div className={classes.buttons}>
          <button type="submit">회원가입</button>
          <button type="button">취소</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
