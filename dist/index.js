"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const directoryPath = process.cwd();
const envTypePath = "env.d.ts";
const targetRegExp = new RegExp(/^\.env(\..+)?$/);
const envs = {};
const getEnvPath = () => {
    try {
        const files = fs_1.default.readdirSync(directoryPath);
        const envFiles = files.filter((file) => {
            const stats = fs_1.default.statSync(file);
            if (stats.isFile() && file.match(targetRegExp)) {
                return file;
            }
        });
        if (envFiles.length == 0) {
            console.warn("> No Env File Found in", directoryPath);
        }
        return envFiles;
    }
    catch (error) {
        console.error("Unable to scan directory: " + error);
        return [];
    }
};
function determineType(value) {
    if (value === "true" || value === "false") {
        return "boolean";
    }
    else if (!isNaN(value)) {
        return "number";
    }
    else if (value.match(/^[A-Za-z0-9+/=]*$/)) {
        return "string";
    }
    else {
        return "string";
    }
}
const envTypeDefs = () => {
    const envFiles = getEnvPath();
    envFiles.forEach((env) => {
        const envPath = path_1.default.join(directoryPath, env);
        const envConfig = dotenv_1.default.parse(fs_1.default.readFileSync(envPath));
        // insert config keys and values paris as (type);
        Object.keys(envConfig).forEach((key) => {
            envs[key] = determineType(envConfig[key]);
        });
    });
    //   write to env file
    const envPathName = path_1.default.join(directoryPath, envTypePath);
    let envObject = "";
    const envObjKeys = Object.keys(envs);
    envObjKeys.forEach((key, index) => {
        envObject += "\t" + key + ":" + envs[key];
        if (index != envObjKeys.length - 1) {
            envObject += ",\n\t";
        }
    });
    fs_1.default.writeFileSync(envPathName, `// generate by env-type-defs
declare global {
  namespace NodeJS {
    interface ProcessEnv {
  ${envObject}
    }
  }
}
export {};
  `, {});
};
envTypeDefs();
exports.default = envTypeDefs;
