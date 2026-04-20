import User from "../models/user.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(500).json({ message: "user already exist" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ email, password: hashedPassword });
  res.status(201).json({ message: "Registered" });
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    return res.status(400).json({ message: "wrong email or password" });
  }
  const isMatch = await bcrypt.compare(password, existingUser.password);
  if (!isMatch) {
    return res.status(400).json({ message: "wrong email or password" });
  }
  res.status(200).json({ message: "LoggedIn" });
};
