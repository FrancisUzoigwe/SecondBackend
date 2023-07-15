"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataBase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MongoString = "mongodb://127.0.0.1:27017/backDB";
const dataBase = () => {
    mongoose_1.default.connect(MongoString).then(() => {
        console.log("Database created successfully🚀🚀🚀🚀");
    });
};
exports.dataBase = dataBase;
