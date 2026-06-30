import { Request, Response } from "express";

export const verifyFirebaseUser = async (
  req: Request,
  res: Response
) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({
        success: false,
        message: "Firebase ID token is required",
      });
    }

    // Firebase verification will be added next
    return res.json({
      success: true,
      message: "Token received",
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Authentication failed",
    });
  }
};
