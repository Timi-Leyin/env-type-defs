import dotenv from "dotenv";
import fs from "fs";
import path from "path";

const directoryPath = process.cwd()
const envTypePath = "env.d.ts";
const targetRegExp = new RegExp(/^\.env(\..+)?$/);
const envs = {};

const getEnvPath = () => {
  try {
    const files = fs.readdirSync(directoryPath);
    const envFiles = files.filter((file) => {
      const stats = fs.statSync(file);
      if (stats.isFile() && file.match(targetRegExp)) {
        return file;
      }
    });
    if (envFiles.length == 0) {
      console.warn("> No Env File Found in", directoryPath);
    }
    return envFiles;
  } catch (error) {
    console.error("Unable to scan directory: " + error);
    return [];
  }
};

function determineType(value) {
  if (value === "true" || value === "false") {
    return "boolean";
  } else if (!isNaN(value)) {
    return "number";
  } else if (value.match(/^[A-Za-z0-9+/=]*$/)) {
    return "string";
  } else {
    return "string";
  }
}

const parseEnv = () => {
  const envFiles = getEnvPath();
  envFiles.forEach((env) => {
    const envPath = path.join(directoryPath, env);
    const envConfig = dotenv.parse(fs.readFileSync(envPath));
    // insert config keys and values paris as (type);
    Object.keys(envConfig).forEach((key) => {
      envs[key] = determineType(envConfig[key]);
    });
  });
  //   write to env file
  const envPathName = path.join(directoryPath, envTypePath);
  let envObject = "";
  const envObjKeys = Object.keys(envs);
  envObjKeys.forEach((key, index) => {
    envObject += "\t" + key + ":" + envs[key];
    if (index != envObjKeys.length - 1) {
      envObject += ",\n\t";
    }
  });
  fs.writeFileSync(
    envPathName,
    `// generate by ./lib/envTypes.ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
  ${envObject}
    }
  }
}
export {};
  `,
    {}
  );
};

parseEnv();
export { parseEnv as generateEnvType };
