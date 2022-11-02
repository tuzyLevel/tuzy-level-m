import express, { Response, Request, NextFunction } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import session, { SessionData } from "express-session";
import connect from "./schemas";
import ColorHash from "color-hash";
import webSocket from "./socket";
import cors from "cors";

const app = express();
app.use(cors());
dotenv.config({ path: `${__dirname}/.env` });
connect();
app.set("port", process.env.PORT || 8005);

app.use(morgan("dev"));
const DEFAULT_PASSWORD = "defaultPassword";
const sessionMiddleware = session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET || DEFAULT_PASSWORD,
  cookie: {
    httpOnly: true,
    secure: false,
  },
});
app.use(sessionMiddleware);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
declare module "express-session" {
  interface SessionData {
    color: string;
  }
}
app.use((req: Request, res: Response, next: NextFunction) => {
  if (!req.session.color) {
    const colorHash = new ColorHash();
    req.session.color = colorHash.hex(req.sessionID);
  }
  next();
});

const server = app.listen(app.get("port"), () => {
  console.log(`${app.get("port")}번 포트에서 대기중`);
});

webSocket(server, app, sessionMiddleware);
