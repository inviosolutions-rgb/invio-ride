import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      default: ""
    },
    phone: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      default: ""
    },
    profileImage: {
      type: String,
      default: ""
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

export default model("User", userSchema);
