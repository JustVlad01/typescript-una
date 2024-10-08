import express, { Application, Request, Response } from "express";
import morgan from "morgan"; // Import the morgan logging middleware
import userRoutes from "./routes/users"; // Import the user routes

// Define the port the server will run on
const PORT = process.env.PORT || 3001;

// Create an instance of an Express application
const app: Application = express();

// Middleware to parse JSON bodies in requests
app.use(express.json());

// Use morgan middleware for logging HTTP requests
app.use(morgan("tiny"));

// Define a test route
app.get("/ping", async (_req: Request, res: Response) => {
  res.send({
    message: "Hello from Una",
  });
});

// Use the user routes for any request to /api/v1/users
app.use('/api/v1/users', userRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log("Server is running on port --", PORT);
});
