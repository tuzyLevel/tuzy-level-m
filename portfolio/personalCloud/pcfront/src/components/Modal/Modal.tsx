import React, { RefObject, SyntheticEvent, useRef } from "react";
import Card from "../Card/Card";
import classes from "./Modal.module.css";

interface ModalProps extends React.PropsWithChildren {
  modalInfo: ModalInfo;
  onClose: (e: SyntheticEvent) => void;
  inputValidation: (e: SyntheticEvent) => string | null;
}

const Modal = (props: ModalProps) => {
  const modalInfo = props.modalInfo;
  const classNamePrefix = modalInfo!.modalName;

  const refs = useRef<{ [id: string]: HTMLInputElement }>({});

  const onBlurHandler = (e: SyntheticEvent) => {
    const getId = props.inputValidation(e);
    console.log(refs);
    if (getId === null) return;
    if (getId === "id") {
      refs.current.id.classList.add(classes.modal_input_danger);
      refs.current.id.placeholder = "올바른 아이디를 입력하세요";
      refs.current.id.focus();
    }
    if (getId === "password") refs.current.password.focus();
    if (getId === "password_val") refs.current.password_val.focus();
  };

  return (
    <div
      onClick={props.onClose}
      className={`${classes["modal_container"]} ${
        classes[`${classNamePrefix}_container`]
      }`}
    >
      <Card
        style={{
          width: "600px",
          height: "400px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "beige",
          zIndex: "5",
        }}
      >
        <form className={classes["modal_form"]}>
          {modalInfo &&
            modalInfo.contents.map((content) => (
              <div
                className={classes[`modal_content`]}
                id={`${modalInfo.modalName}_content_${content}`}
                key={`${modalInfo.modalName}_content_${content}`}
              >
                <label htmlFor={content}>{modalInfo.ko[content]}</label>
                <input
                  className={classes.modal_input}
                  name={content}
                  id={content}
                  type={
                    content.substring(0, 8) === "password" ? "password" : "text"
                  }
                  onBlur={onBlurHandler}
                  ref={(el) => (refs.current[content] = el!)}
                ></input>
              </div>
            ))}
          <div>{props.children}</div>
        </form>
      </Card>
    </div>
  );
};

export default Modal;
