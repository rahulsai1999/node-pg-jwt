import User from "../models/user";
import { where } from "sequelize/types";

const createUser = async userObj => {
  return await User.create(userObj);
};

const getAllUsers = async () => {
  return await User.findAll();
};

const getUser = async obj => {
  return await User.findOne({ where: obj });
};

const reqGetAllUsers = (req, res) => {
  getAllUsers().then(user => res.json(user));
};