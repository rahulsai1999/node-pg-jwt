import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import dotenv from "dotenv";
import User from "../models/user";

dotenv.config();

let jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET,
};

let strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  User.findOne({ id: jwt_payload.id }).then((user) => {
    if (user) {
      next(null, user);
    } else {
      next(null, false);
    }
  });
});

export { strategy, jwtOptions };
