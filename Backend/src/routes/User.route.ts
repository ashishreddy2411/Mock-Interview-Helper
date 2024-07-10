import { Router } from "express";
import {getAllUsers,userLogin,userSignup} from "../controllers/User.controller";
import {validateUser,SignupValidator,LoginValidator} from "../utils/Validators";
const userRouter = Router();

userRouter.get("/",getAllUsers);
userRouter.post("/signup",validateUser(SignupValidator),userSignup);
userRouter.get("/login",validateUser(LoginValidator),userLogin);

export default userRouter;
