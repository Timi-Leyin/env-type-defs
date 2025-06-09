"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.determineType = void 0;
const determineType = (value) => {
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
};
exports.determineType = determineType;
