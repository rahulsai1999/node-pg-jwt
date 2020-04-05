import jwt from "jsonwebtoken";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import { getUser } from "../controllers/userCon";
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

export { strategy };
