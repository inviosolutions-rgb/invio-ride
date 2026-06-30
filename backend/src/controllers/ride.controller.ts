import { Request, Response } from "express";
import Ride from "../models/Ride";

export const createRide = async (req: Request, res: Response) => {
  try {
    const ride = await Ride.create(req.body);

    res.status(201).json({
      success: true,
      message: "Ride created successfully",
      data: ride,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create ride",
    });
  }
};

export const getRides = async (_req: Request, res: Response) => {
  const rides = await Ride.find();

  res.json({
    success: true,
    data: rides,
  });
};
