import User from "../models/user";

const getUser = (obj) => {
  User.findOne({ where: obj }).then((user) => {
    return user;
  });
};

export { getUser };
