import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user";
import { ExtractJwt } from "passport-jwt";
let jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "rerere",
};

const getUser = (obj) => {
  User.findOne({ where: obj }).then((user) => {
    return user;
  });
};

const createUser = (req, res) => {
  let { name, email, password } = req.body;
  const salt = bcrypt.genSaltSync(5);
  password = bcrypt.hashSync(password, salt);
  User.create({ name: name, email: email, password: password }).then((user) => {
    res.json({ message: "User Registered", user_id: user.id });
  });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) res.json({ message: "User not found" });
      else {
        if (bcrypt.compareSync(password, user.password)) {
          let payload = { id: user.id, email: user.email };
          let token = jwt.sign(payload, jwtOptions.secretOrKey);
          res.json({ message: "Logged In", token: token });
        } else res.json({ message: "Incorrect Password" });
      }
    })
    .catch(() => {
      res.status(401).json({ message: "Internal Error" });
    });
};

export { getUser, createUser, loginUser };
