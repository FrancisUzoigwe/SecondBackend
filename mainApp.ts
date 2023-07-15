import express, { Application } from "express";
import cors from "cors";
import back from "./src/router/backRoute"
export const mainApp = (app: Application) => {
    app
    .use(express.json())
    .use(cors())
    .use("/api/v1", back)
}