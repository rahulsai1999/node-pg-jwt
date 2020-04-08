import passport from "passport";
import njwt from "njwt";
import dotenv from "dotenv";

dotenv.config();

const isLoggedIn = (req, res, next) => {
  passport.authenticate("jwt", (err, user, info) => {
    if (err) res.json({ error: err });
    if (!user) {
      res.status(401).json({ error: "Invalid Credentials" });
    }
    if (user) {
      next();
    }
  })(req, res, next);
};

const extractID = (headers) => {
  const token = headers.authorization.split(" ")[1];
  return njwt.verify(token, process.env.SECRET);
};

export { isLoggedIn, extractID };
