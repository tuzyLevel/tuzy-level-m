import React from "react";
import { io, Socket } from "socket.io-client";
import Chat from "./views/Chat";

import "./App.css";
import Room from "./views/Room";

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
  return <Room />;
}

export default App;
