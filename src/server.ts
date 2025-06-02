import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dashboardRoutes from "./routes/dashboard";
import { errorHandler, notFound } from "./middleware/errorHandler";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL || "https://admintyppout.vercel.app",
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// }));

// app.use(cors({
//   origin: "https://admintyppout.vercel.app"
// }));

app.use(
  cors({
    origin: ["https://admintyppout.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
)

app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Dashboard API is running",
    timestamp: new Date().toISOString(),
  });
});

// Mount dashboard routes properly
app.use("/api/dashboard", dashboardRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Dashboard API available at http://localhost:${PORT}/api/dashboard`);
  console.log(`🏥 Health check at http://localhost:${PORT}/health`);
});

export default app;
