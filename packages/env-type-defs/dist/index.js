"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const generate_types_1 = require("./src/utils/generate-types");
const paths_1 = require("./src/utils/paths");
const config_1 = require("./src/config");
const envTypeDefs = (config) => {
    const envs = (0, generate_types_1.generateEnvTypes)();
    if (config === null || config === void 0 ? void 0 : config.watch) {
        const envFiles = (0, paths_1.getEnvPath)();
        envFiles.forEach((envFile) => {
            const envFilePath = path_1.default.join(config_1.DIRECTORY_PATH, envFile);
            // Remove any existing watcher before adding a new one
            fs_1.default.unwatchFile(envFilePath);
            fs_1.default.watchFile(envFilePath, { persistent: true, interval: 100 }, (curr, prev) => {
                (0, generate_types_1.generateEnvTypes)();
            });
        });
    }
    return envs;
};
exports.default = envTypeDefs;
