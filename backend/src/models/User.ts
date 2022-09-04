import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add your name"],
      trim: true,
      maxLength: [20, "Your name should be 20 characters long."],
    },
    account: { 
      type: String,
      required: [true, "Please add your email or phone number"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add your password"],
      trim: true,
    },
    avartar: {
      type: String,
      default:
        "https://res.cloudinary.com/cocnicom/image/upload/v1653916277/grielhenergy/blank-avatar-user_n9babz.webp",
    },
    role: {
      type: String,
      default: "user",  // or admin
    },
    type: {
      type: String,
      default: "normal",  // or fast
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', userSchema)
