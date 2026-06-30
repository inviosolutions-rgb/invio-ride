import { Request, Response } from "express";
import User from "../models/User";

export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, phone, email } = req.body;

    const existingUser = await User.findOne({ phone });

    if (existingUser) {
      res.status(400).json({
        success: false,
        message: "User already exists"
      });
      return;
    }

    const user = await User.create({
      name,
      phone,
      email
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};
