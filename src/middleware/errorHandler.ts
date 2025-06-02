import type { Request, Response, NextFunction } from "express"

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error("Error:", err.message)
  console.error("Stack:", err.stack)

  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: process.env.NODE_ENV === "development" ? err.message : "Something went wrong",
  })
}

export const notFound = (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  })
}
