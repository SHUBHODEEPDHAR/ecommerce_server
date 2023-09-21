import mongoose, { Schema } from "mongoose";

const userSchema =new Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    Picture: {
        type: String,
       
    },
   date:{
    type:Date,
    default:Date.now
   }
});


const User = mongoose.model("User",userSchema);

export default User;