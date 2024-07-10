import User from "../models/Users.model.js";
export const getAllUsers = (async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch (err) {
        console.log(err);
    }
});
//# sourceMappingURL=User.controller.js.map