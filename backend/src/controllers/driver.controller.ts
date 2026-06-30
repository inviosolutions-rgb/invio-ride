import { Request, Response } from "express";
import Driver from "../models/Driver";

export const registerDriver = async (req: Request, res: Response) => {
  try {
    const driver = await Driver.create(req.body);

    res.status(201).json({
      success: true,
      message: "Driver registered successfully",
      data: driver,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Driver registration failed",
    });
  }
};

export const getDrivers = async (_req: Request, res: Response) => {
  const drivers = await Driver.find();

  res.json({
    success: true,
    data: drivers,
  });
};
