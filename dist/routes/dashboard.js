"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardController_1 = require("../controllers/dashboardController");
const router = (0, express_1.Router)();
// Dashboard stats endpoint
router.get("/stats", dashboardController_1.getDashboardStats);
// Chart data endpoint
router.get("/charts", dashboardController_1.getChartData);
// Metrics by category
router.get("/metrics/:category", dashboardController_1.getMetricsByCategory);
// All metrics
router.get("/metrics", dashboardController_1.getAllMetrics);
// Historical data
router.get("/historical/:type", dashboardController_1.getHistoricalData);
// Available categories
router.get("/categories", dashboardController_1.getCategories);
exports.default = router;
