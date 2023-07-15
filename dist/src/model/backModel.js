"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const iBack = new mongoose_1.default.Schema({
    name: { type: String, required: [true, "Please provide a name"] },
    email: {
        type: String,
        required: [true, "Please provide a valid email address"],
    },
    userName: { type: String, required: [true, "Please provide a user name"] },
    password: { type: String, required: [true, "Please provide a password"] },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("Backend", iBack);
