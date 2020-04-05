//libraries
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import { getUser } from "./controllers/userCon";

//user imports
import { sequelize, connectAuthenticate } from "./util/dbConnect";

//routes
import blogRoutes from "./routes/blogRoute";
import authRoutes from "./routes/authRoutes";

//test connection, sync tables and initialises passport
connectAuthenticate();
sequelize.sync();

let jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "rerere",
};

let strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  console.log("Payload", jwt_payload);
  let user = getUser({ id: jwt_payload.id });
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});

//utilities
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
passport.use(strategy);

//routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "API Health OK" });
});

app.use(blogRoutes);
app.use("/auth", authRoutes);

app.listen(5000, () => {
  console.log("Running on", 5000);
});
