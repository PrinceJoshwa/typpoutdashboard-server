// import type { Request, Response } from "express"
// import { dashboardStats, chartData, allMetricsData, historicalData } from "../data/dummyData"

// export const getDashboardStats = (req: Request, res: Response) => {
//   try {
//     res.json({
//       success: true,
//       data: dashboardStats,
//     })
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Error fetching dashboard stats",
//       error: error instanceof Error ? error.message : "Unknown error",
//     })
//   }
// }

// export const getChartData = (req: Request, res: Response) => {
//   try {
//     res.json({
//       success: true,
//       data: chartData,
//     })
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Error fetching chart data",
//       error: error instanceof Error ? error.message : "Unknown error",
//     })
//   }
// }

// export const getMetricsByCategory = (req: Request, res: Response) => {
//   try {
//     const { category } = req.params

//     if (!category) {
//       return res.status(400).json({
//         success: false,
//         message: "Category parameter is required",
//       })
//     }

//     const metrics = allMetricsData[category]

//     if (!metrics) {
//       return res.status(404).json({
//         success: false,
//         message: `No metrics found for category: ${category}`,
//       })
//     }

//     res.json({
//       success: true,
//       data: metrics,
//     })
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Error fetching metrics",
//       error: error instanceof Error ? error.message : "Unknown error",
//     })
//   }
// }

// export const getAllMetrics = (req: Request, res: Response) => {
//   try {
//     res.json({
//       success: true,
//       data: allMetricsData,
//     })
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Error fetching all metrics",
//       error: error instanceof Error ? error.message : "Unknown error",
//     })
//   }
// }

// export const getHistoricalData = (req: Request, res: Response) => {
//   try {
//     const { type } = req.params

//     if (type && historicalData[type as keyof typeof historicalData]) {
//       res.json({
//         success: true,
//         data: historicalData[type as keyof typeof historicalData],
//       })
//     } else {
//       res.json({
//         success: true,
//         data: historicalData,
//       })
//     }
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Error fetching historical data",
//       error: error instanceof Error ? error.message : "Unknown error",
//     })
//   }
// }

// export const getCategories = (req: Request, res: Response) => {
//   try {
//     const categories = Object.keys(allMetricsData)
//     res.json({
//       success: true,
//       data: categories,
//     })
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Error fetching categories",
//       error: error instanceof Error ? error.message : "Unknown error",
//     })
//   }
// }

import type { Request, Response } from "express"
import { dashboardStats, chartData, allMetricsData, historicalData } from "../data/dummyData"

export const getDashboardStats = (req: Request, res: Response): void => {
  try {
    res.json({
      success: true,
      data: dashboardStats,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching dashboard stats",
      error: error instanceof Error ? error.message : "Unknown error",
    })
  }
}

export const getChartData = (req: Request, res: Response): void => {
  try {
    res.json({
      success: true,
      data: chartData,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching chart data",
      error: error instanceof Error ? error.message : "Unknown error",
    })
  }
}

export const getMetricsByCategory = (req: Request, res: Response): void => {
  try {
    const { category } = req.params

    if (!category) {
      res.status(400).json({
        success: false,
        message: "Category parameter is required",
      })
      return
    }

    const metrics = allMetricsData[category]

    if (!metrics) {
      res.status(404).json({
        success: false,
        message: `No metrics found for category: ${category}`,
      })
      return
    }

    res.json({
      success: true,
      data: metrics,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching metrics",
      error: error instanceof Error ? error.message : "Unknown error",
    })
  }
}

export const getAllMetrics = (req: Request, res: Response): void => {
  try {
    res.json({
      success: true,
      data: allMetricsData,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching all metrics",
      error: error instanceof Error ? error.message : "Unknown error",
    })
  }
}

export const getHistoricalData = (req: Request, res: Response): void => {
  try {
    const { type } = req.params

    if (type && historicalData[type as keyof typeof historicalData]) {
      res.json({
        success: true,
        data: historicalData[type as keyof typeof historicalData],
      })
    } else {
      res.json({
        success: true,
        data: historicalData,
      })
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching historical data",
      error: error instanceof Error ? error.message : "Unknown error",
    })
  }
}

export const getCategories = (req: Request, res: Response): void => {
  try {
    const categories = Object.keys(allMetricsData)
    res.json({
      success: true,
      data: categories,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching categories",
      error: error instanceof Error ? error.message : "Unknown error",
    })
  }
}
