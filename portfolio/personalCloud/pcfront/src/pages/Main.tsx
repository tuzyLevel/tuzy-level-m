import React, { SyntheticEvent, useState } from "react";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
import ModalPortal from "../components/Portal/ModalPortal";

import classes from "./Main.module.css";

const loginModalInfo: ModalInfo = {
  modalName: "Login",
  contents: ["id", "password"],
  ko: { modalName: "로그인", id: "아이디", password: "비밀번호" },
};
const signInModalInfo: ModalInfo = {
  modalName: "Sign In",
  contents: ["id", "password", "password_val"],
  ko: {
    modalName: "회원가입",
    id: "아이디",
    password: "비밀번호",
    password_val: "비밀번호 확인",
  },
};

const Main = (props: React.PropsWithChildren) => {
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [signInModalOpen, setSignInModalOpen] = useState<boolean>(false);

  const loginModalCloseHandler = (e: SyntheticEvent) => {
    e.preventDefault();

    if (e.target !== e.currentTarget) return;

    setLoginModalOpen(false);
  };

  const signInModalCloseHandler = (e: SyntheticEvent) => {
    e.preventDefault();

    if (e.target !== e.currentTarget) return;

    setSignInModalOpen(false);
  };

  const signInButtonClickHandler = () => {
    setSignInModalOpen(true);
    setLoginModalOpen(false);
  };

  const loginButtonClickHandler = () => {
    setLoginModalOpen(true);
    setSignInModalOpen(false);
  };

  const loginInputValidationHandler = (e: SyntheticEvent) => {
    const target = e.currentTarget as HTMLInputElement;
    if (target.id === "id") {
      if (target.value.length < 6) return "id";
    }
    if (target.id === "password") {
      return "password";
    }
    return null;
  };
  const signInInputValidationHandler = (e: SyntheticEvent) => {
    const target = e.currentTarget as HTMLInputElement;
    if (target.id === "id") {
      if (target.value.length < 6) return "id";
    }
    if (target.id === "password") {
      return "password";
    }
    if (target.id === "password_val") {
      console.log(e.currentTarget.id);
      return "password_val";
    }
    return null;
  };

  return (
    <React.Fragment>
      <div className={classes.main_page_container}>
        <Button
          className={"bg sign-in"}
          buttonName={"회원가입"}
          onClick={signInButtonClickHandler}
        ></Button>
        <Button
          className={"bg login"}
          buttonName={"로그인"}
          onClick={loginButtonClickHandler}
        ></Button>
      </div>
      {/* modal */}
      <div>
        {loginModalOpen && (
          <ModalPortal>
            <Modal
              modalInfo={loginModalInfo}
              onClose={loginModalCloseHandler}
              inputValidation={loginInputValidationHandler}
            >
              <Button
                buttonName={`${loginModalInfo.modalName}`}
                className={`md ${loginModalInfo.modalName} mg-sm btn_login`}
                type="submit"
              />
              <Button
                buttonName="Cancel"
                className={`md btn_cancel mg-sm`}
                onClick={loginModalCloseHandler}
              ></Button>
            </Modal>
          </ModalPortal>
        )}
        {signInModalOpen && (
          <ModalPortal>
            <Modal
              modalInfo={signInModalInfo}
              onClose={signInModalCloseHandler}
              inputValidation={signInInputValidationHandler}
            >
              <Button
                buttonName={`${signInModalInfo.modalName}`}
                className={`md ${signInModalInfo.modalName} md-sm btn_signin`}
                type="submit"
              ></Button>
              <Button
                buttonName="Cancel"
                className={`md btn_cancel mg-sm`}
                onClick={signInModalCloseHandler}
              ></Button>
            </Modal>
          </ModalPortal>
        )}
      </div>
    </React.Fragment>
  );
};

export default Main;
