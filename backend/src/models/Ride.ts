import { Schema, model } from "mongoose";

const rideSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    driver: {
      type: Schema.Types.ObjectId,
      ref: "Driver",
      default: null
    },
    pickup: {
      address: String,
      latitude: Number,
      longitude: Number
    },
    destination: {
      address: String,
      latitude: Number,
      longitude: Number
    },
    distance: {
      type: Number,
      default: 0
    },
    fare: {
      type: Number,
      default: 0
    },
    paymentMethod: {
      type: String,
      enum: ["cash", "upi"],
      default: "cash"
    },
    status: {
      type: String,
      enum: [
        "requested",
        "accepted",
        "arrived",
        "started",
        "completed",
        "cancelled"
      ],
      default: "requested"
    }
  },
  {
    timestamps: true
  }
);

export default model("Ride", rideSchema);
