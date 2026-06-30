import { Schema, model } from "mongoose";

const driverSchema = new Schema(
  {
    name: {
      type: String,
      required: true
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
    vehicleNumber: {
      type: String,
      required: true
    },
    licenseNumber: {
      type: String,
      required: true
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    isOnline: {
      type: Boolean,
      default: false
    },
    currentLocation: {
      latitude: {
        type: Number,
        default: 0
      },
      longitude: {
        type: Number,
        default: 0
      }
    }
  },
  {
    timestamps: true
  }
);

export default model("Driver", driverSchema);
