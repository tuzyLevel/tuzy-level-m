import React, { Fragment } from "react";
import { io, Socket } from "socket.io-client";
import Main from "./views/Main";
import Chat from "./views/Chat";
import Room from "./views/Room";
import "./App.css";
import ModalPortal from "./components/Modal/ModalPortal";
import { Routes, Route } from "react-router-dom";

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  news: (data: string) => void;
}

interface ClientToServerEvents {
  reply: (data: string) => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  interval: NodeJS.Timer;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/room" element={<Room />} />
    </Routes>
  );
}

export default App;
