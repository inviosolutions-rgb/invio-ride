import express from "express";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    app: "Invio Ride API",
    version: "1.0.0",
    status: "Running"
  });
});

export default app;
