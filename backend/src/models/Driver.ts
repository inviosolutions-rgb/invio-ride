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
      type: {
        type: String,
        enum: ["Point"],
        default: "Point"
      },
      coordinates: {
        type: [Number],
        default: [0, 0]
      }
    },
    rating: {
      type: Number,
      default: 5
    }
  },
  {
    timestamps: true
  }
);

driverSchema.index({ currentLocation: "2dsphere" });

export default model("Driver", driverSchema);
