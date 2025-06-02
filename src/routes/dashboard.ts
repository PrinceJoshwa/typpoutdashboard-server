import { Router } from "express"
import {
  getDashboardStats,
  getChartData,
  getMetricsByCategory,
  getAllMetrics,
  getHistoricalData,
  getCategories,
} from "../controllers/dashboardController"

const router = Router()

// Dashboard stats endpoint
router.get("/stats", getDashboardStats)

// Chart data endpoint
router.get("/charts", getChartData)

// Metrics by category
router.get("/metrics/:category", getMetricsByCategory)

// All metrics
router.get("/metrics", getAllMetrics)

// Historical data
router.get("/historical/:type", getHistoricalData)

// Available categories
router.get("/categories", getCategories)

export default router
