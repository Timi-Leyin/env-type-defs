"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TAREGT_REG_EXP = exports.ENV_TYPE_PATH = exports.DIRECTORY_PATH = void 0;
exports.DIRECTORY_PATH = process.cwd();
exports.ENV_TYPE_PATH = "env.d.ts";
exports.TAREGT_REG_EXP = new RegExp(/^\.env(\..+)?$/);
