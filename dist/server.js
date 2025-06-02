"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dashboard_1 = __importDefault(require("./routes/dashboard"));
const errorHandler_1 = require("./middleware/errorHandler");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// CORS configuration
app.use((0, cors_1.default)({
    origin: ["https://admintyppout.vercel.app", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));
app.options("*", (0, cors_1.default)());
// Middleware
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("combined"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Health check
app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Dashboard API is running",
        timestamp: new Date().toISOString(),
    });
});
// Mount dashboard routes properly
app.use("/api/dashboard", dashboard_1.default);
// Error handling
app.use(errorHandler_1.notFound);
app.use(errorHandler_1.errorHandler);
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📊 Dashboard API available at http://localhost:${PORT}/api/dashboard`);
    console.log(`🏥 Health check at http://localhost:${PORT}/health`);
});
exports.default = app;
// import express from "express";
// import cors from "cors";
// import helmet from "helmet";
// import morgan from "morgan";
// import dashboardRoutes from "./routes/dashboard";
// import { errorHandler, notFound } from "./middleware/errorHandler";
// const app = express();
// const PORT = process.env.PORT || 5000;
// // Middleware
// app.use(helmet());
// // app.use(
// //   cors({
// //     origin: process.env.FRONTEND_URL || "https://admintyppout.vercel.app",
// //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
// //   allowedHeaders: ['Content-Type', 'Authorization'],
// //   credentials: true
// // }));
// // app.use(cors({
// //   origin: "https://admintyppout.vercel.app"
// // }));
// app.use(
//   cors({
//     origin: ["https://admintyppout.vercel.app"],
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// )
// app.use(morgan("combined"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// // Health check
// app.get("/health", (req, res) => {
//   res.json({
//     success: true,
//     message: "Dashboard API is running",
//     timestamp: new Date().toISOString(),
//   });
// });
// // Mount dashboard routes properly
// app.use("/api/dashboard", dashboardRoutes);
// // Error handling
// app.use(notFound);
// app.use(errorHandler);
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log(`📊 Dashboard API available at http://localhost:${PORT}/api/dashboard`);
//   console.log(`🏥 Health check at http://localhost:${PORT}/health`);
// });
// export default app;
