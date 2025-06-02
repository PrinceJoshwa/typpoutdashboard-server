export interface MetricData {
  metric: string
  current: string
  ideal: string
  trend: string
  category: string
}

export interface DashboardStats {
  dailyActiveUsers: {
    value: number
    change: string
    trend: "up" | "down"
  }
  campaignReplyRate: {
    value: string
    change: string
    trend: "up" | "down"
  }
  icpSearches: {
    value: number
    change: string
    trend: "up" | "down"
  }
  monthlyRevenue: {
    value: string
    change: string
    trend: "up" | "down"
  }
}

export interface ChartData {
  dailyActiveUsers: number[]
  postActivity: {
    label: string
    value: number
    color: string
  }[]
}

export interface HistoricalDataPoint {
  date: string
  value: number
}

export interface RevenueDataPoint {
  month: string
  value: number
}
