import { Request, Response } from "express";
import { updateDriverStatus } from "../services/driver.service";

export async function goOnline(req: Request, res: Response) {
  const { driverId } = req.body;

  const driver = await updateDriverStatus(driverId, true);

  res.json({
    success: true,
    message: "Driver is now online",
    data: driver,
  });
}

export async function goOffline(req: Request, res: Response) {
  const { driverId } = req.body;

  const driver = await updateDriverStatus(driverId, false);

  res.json({
    success: true,
    message: "Driver is now offline",
    data: driver,
  });
}
