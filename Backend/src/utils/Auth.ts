import { sign } from "jsonwebtoken";
import { Document, Types } from "mongoose";

export const createToken = (id:string,email:string) => {
    const payload = {
            id,
            email
    };
    const authToken = sign(payload,process.env.JWT_SECRET,{expiresIn: "7d"});
    return authToken;
}