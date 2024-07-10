import { Router } from "express";
import userRouter from "./User.route";
import chatRouter from "./Chat.route";

const router = Router();

router.use("/user",userRouter);
router.use("/chats",chatRouter);
router.get("/",(req,res) => {
    res.send("Welcome to the AI Chatbot API!");
});


export default router;