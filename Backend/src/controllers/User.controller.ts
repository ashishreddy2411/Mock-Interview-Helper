import User from "../models/Users.model";
import { Request, Response, NextFunction } from "express";
import { compare, hash } from "bcrypt";
import { createToken } from "../utils/Auth";
import { COOKIE_NAME } from "../utils/Constants";
export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find();
    res.status(200).json({ Users: users });
  } catch (err) {
    console.log(err);
  }
};

export const userSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(409).json({ Message: "User Already Exists!" });
    }
    const HashedPassword = await hash(password, 10);
    const user = new User({
      name,
      email,
      password: HashedPassword,
    });
    await user.save();
    res.status(201).json({ Message: "User Created Successfully!" });
  } catch (err) {
    console.log(err);
  }
};

export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ Message: "User Not Found!" });
    } else {
      const match = await compare(password, user.password);
      if (match) {
        res.clearCookie(COOKIE_NAME, { path: "/", domain: "localhost" });
        const token = createToken(String(user._id), user.email);
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + 7);
        res.cookie(COOKIE_NAME, token, {
          path: "/",
          domain: "localhost",
          httpOnly: true,
          expires: expiry,
          signed: true
        });
        res.status(200).json({ Message: "User Logged In!" });
      } else {
        res.status(401).json({ Message: "Invalid Password!" });
      }
    }
  } catch (err) {
    console.log(err);
  }
};
