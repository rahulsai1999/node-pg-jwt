//libraries
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import passport from "passport";

//user imports
import { sequelize, connectAuthenticate } from "./util/dbConnect";
import { strategy } from "./util/strategy";
//routes
import blogRoutes from "./routes/blogRoute";

//test connection and sync tables
connectAuthenticate();
sequelize.sync();
passport.use(strategy);

//utilities
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

//routes
app.get("/", (req, res) => {
  res.send("Hello from the server side");
});

app.use(blogRoutes);

app.listen(5000, () => {
  console.log("Running on", 5000);
});
