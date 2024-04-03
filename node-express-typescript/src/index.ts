import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectMongoDB } from "./config/db";
import todoRouter from "./routes/todo.routes";

dotenv.config();

const app: Application = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use(todoRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

// main
const initServer = async () => {
  try {
    await connectMongoDB();
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
};

initServer();

