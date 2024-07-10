import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    role:{
        type: String,
        required: true
    },
    message:{
        type: String,
    }

});

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    chats: [chatSchema]
});


const User = mongoose.model('Users',UserSchema);

export default User;