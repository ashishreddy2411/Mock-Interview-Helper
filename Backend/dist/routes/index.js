import { Router } from "express";
import userRouter from "./User.route.js";
import chatRouter from "./Chat.route.js";
const router = Router();
router.use("/users", userRouter);
router.use("/chats", chatRouter);
router.get("/", (req, res) => {
    res.send("Welcome to the AI API");
});
export default router;
//# sourceMappingURL=index.js.map