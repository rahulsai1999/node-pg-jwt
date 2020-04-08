import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import dotenv from "dotenv";
import User from "../models/user";

dotenv.config();

let jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET,
};

let strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  console.log("Payload", jwt_payload);
  User.findOne({ id: jwt_payload.id }).then((user) => {
    if (user) {
      console.log(user);
      next(null, user);
    } else {
      console.log("null");
      next(null, false);
    }
  });
});

export { strategy, jwtOptions };
