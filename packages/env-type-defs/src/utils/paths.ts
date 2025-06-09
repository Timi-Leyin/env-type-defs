import fs from "fs";
import { DIRECTORY_PATH, TAREGT_REG_EXP } from "../config";

export const getEnvPath = () => {
  try {
    const files = fs.readdirSync(DIRECTORY_PATH);
    const envFiles = files.filter((file) => {
      const stats = fs.statSync(file);
      if (stats.isFile() && file.match(TAREGT_REG_EXP)) {
        return file;
      }
    });
    if (envFiles.length == 0) {
      // [LOGS] No Env File Found in the current directory
    }
    return envFiles;
  } catch (error) {
    // [LOGS] Unable to scan directory
    return [];
  }
};
