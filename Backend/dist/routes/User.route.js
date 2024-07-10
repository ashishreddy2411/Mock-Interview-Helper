import { Router } from "express";
import { getAllUsers } from "../controllers/User.controller.js";
const userRouter = Router();
userRouter.get("/users", getAllUsers);
export default userRouter;
//# sourceMappingURL=User.route.js.map