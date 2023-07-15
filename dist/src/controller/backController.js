"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.viewUser = void 0;
const backModel_1 = __importDefault(require("../model/backModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const viewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const view = yield backModel_1.default.find();
        return res.status(200).json({
            message: "Viewing all users...",
            data: view,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Unable to view all users",
            error,
        });
    }
});
exports.viewUser = viewUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, email, password, name } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hash = yield bcrypt_1.default.hash(password, salt);
        const user = yield backModel_1.default.create({ userName, email, password: hash, name });
        return res.status(201).json({
            message: `${user.userName} your account has been created successfully`,
            data: user,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error occurred while creating user",
            error,
        });
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield backModel_1.default.findByIdAndUpdate(id);
        return res.status(200).json({
            message: `${user === null || user === void 0 ? void 0 : user.userName} updated successfully`,
            data: user
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error occurred while updating user",
            error,
        });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield backModel_1.default.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Account deleted sucessfully",
            data: user
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error occurred while deleting user",
            error,
        });
    }
});
exports.deleteUser = deleteUser;
