//libraries
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import { connectAuthenticate } from "../controllers/dbConnect";

//test connection
connectAuthenticate();

//utilities
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.get("/", (req, res) => {
  res.send("Hello from the server side");
});

app.listen(5000, () => {
  console.log("Running on", 5000);
});
