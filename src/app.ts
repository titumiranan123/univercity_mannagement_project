import express, { NextFunction, Request, Response } from "express";

export const app = express();

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: "something went wrong" });
});
