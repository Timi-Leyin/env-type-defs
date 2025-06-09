import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { generateEnvTypes } from "./src/utils/generate-types";
import { getEnvPath } from "./src/utils/paths";
import { DIRECTORY_PATH } from "./src/config";

export type EnvTypeDefsConfig = {
  watch?: boolean;
};

const envTypeDefs = (config?: EnvTypeDefsConfig) => {
  const envs = generateEnvTypes();

  if (config?.watch) {
    const envFiles = getEnvPath();
    envFiles.forEach((envFile) => {
      const envFilePath = path.join(DIRECTORY_PATH, envFile);
      // Remove any existing watcher before adding a new one
      fs.unwatchFile(envFilePath);
      fs.watchFile(
        envFilePath,
        { persistent: true, interval: 100 },
        (curr, prev) => {
          generateEnvTypes();
        }
      );
    });
  }

  return envs;
};

export default envTypeDefs;
