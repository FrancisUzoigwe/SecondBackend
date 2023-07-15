import express, { Application } from "express";
import { mainApp } from "./mainApp";
import { dataBase } from "./src/config/dataBase";

const app: Application = express();

const Port: number = 3100;
const realPort = Port;
mainApp(app);
const Server = app.listen(realPort, () => {
  dataBase();
  console.log("Server is live and listening on port", realPort);
});

process.on("uncaughtException", (error) => {
  console.log("uncaughtException", error);
  console.log("Server is shutting down due to uncaught exception");

  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.log("unhandledRejection", reason);
  console.log("Server is shutting down due to unhandled rejection");

  Server.close(() => {
    process.exit(1);
  });
});
