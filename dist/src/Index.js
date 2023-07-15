"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainApp_1 = require("./mainApp");
const dataBase_1 = require("./config/dataBase");
const app = (0, express_1.default)();
const Port = 3100;
const realPort = Port;
(0, mainApp_1.mainApp)(app);
const Server = app.listen(realPort, () => {
    (0, dataBase_1.dataBase)();
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
