"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvPath = void 0;
const fs_1 = __importDefault(require("fs"));
const config_1 = require("../config");
const getEnvPath = () => {
    try {
        const files = fs_1.default.readdirSync(config_1.DIRECTORY_PATH);
        const envFiles = files.filter((file) => {
            const stats = fs_1.default.statSync(file);
            if (stats.isFile() && file.match(config_1.TAREGT_REG_EXP)) {
                return file;
            }
        });
        if (envFiles.length == 0) {
            // [LOGS] No Env File Found in the current directory
        }
        return envFiles;
    }
    catch (error) {
        // [LOGS] Unable to scan directory
        return [];
    }
};
exports.getEnvPath = getEnvPath;
