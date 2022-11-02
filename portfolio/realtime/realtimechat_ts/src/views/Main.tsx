import React, { Fragment } from "react";

const Main: React.FC = (props) => {
  return (
    <Fragment>
      <h1>GIF 채팅방</h1>
      <fieldset>
        <legend>채팅방 목록</legend>
        <table>
          <thead>
            <tr>
              <th>방 제목</th>
              <th>종류</th>
              <th>허용 인원</th>
              <th>방장</th>
            </tr>
          </thead>
          <tbody>{}</tbody>
        </table>
        <div className="error-message">{}</div>
        <a href="/room">채팅방 생성</a>
      </fieldset>
    </Fragment>
  );
};

export default Main;
