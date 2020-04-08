import User from "../models/user";
import { extractID } from "../util/authHelpers";

const welcomeUser = (req, res) => {
  const { id } = extractID(req.headers).body;
  User.findOne({ id: id }).then((user) => {
    res.json({ message: `Welcome ${user.name}` });
  });
};

export { welcomeUser };
