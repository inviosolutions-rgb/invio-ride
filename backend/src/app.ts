import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { errorHandler } from "./middleware/error.middleware";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(errorHandler);
app.use("/api", routes);

app.get("/", (_req, res) => {
  res.json({
    app: "Invio Ride",
    status: "Running"
  });
});

export default app;
