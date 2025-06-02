"use strict";
// import type { Request, Response } from "express"
// import { dashboardStats, chartData, allMetricsData, historicalData } from "../data/dummyData"
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = exports.getHistoricalData = exports.getAllMetrics = exports.getMetricsByCategory = exports.getChartData = exports.getDashboardStats = void 0;
const dummyData_1 = require("../data/dummyData");
const getDashboardStats = (req, res) => {
    try {
        res.json({
            success: true,
            data: dummyData_1.dashboardStats,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching dashboard stats",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
};
exports.getDashboardStats = getDashboardStats;
const getChartData = (req, res) => {
    try {
        res.json({
            success: true,
            data: dummyData_1.chartData,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching chart data",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
};
exports.getChartData = getChartData;
const getMetricsByCategory = (req, res) => {
    try {
        const { category } = req.params;
        if (!category) {
            res.status(400).json({
                success: false,
                message: "Category parameter is required",
            });
            return;
        }
        const metrics = dummyData_1.allMetricsData[category];
        if (!metrics) {
            res.status(404).json({
                success: false,
                message: `No metrics found for category: ${category}`,
            });
            return;
        }
        res.json({
            success: true,
            data: metrics,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching metrics",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
};
exports.getMetricsByCategory = getMetricsByCategory;
const getAllMetrics = (req, res) => {
    try {
        res.json({
            success: true,
            data: dummyData_1.allMetricsData,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching all metrics",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
};
exports.getAllMetrics = getAllMetrics;
const getHistoricalData = (req, res) => {
    try {
        const { type } = req.params;
        if (type && dummyData_1.historicalData[type]) {
            res.json({
                success: true,
                data: dummyData_1.historicalData[type],
            });
        }
        else {
            res.json({
                success: true,
                data: dummyData_1.historicalData,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching historical data",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
};
exports.getHistoricalData = getHistoricalData;
const getCategories = (req, res) => {
    try {
        const categories = Object.keys(dummyData_1.allMetricsData);
        res.json({
            success: true,
            data: categories,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching categories",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
};
exports.getCategories = getCategories;
