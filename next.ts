import type { NextConfig } from "next";
import envTypeDefsMain, { EnvTypeDefsConfig } from "./index";

const envTypeDefs = (config: NextConfig, envConfig?: EnvTypeDefsConfig) => {
  envTypeDefsMain(envConfig);
  return config;
};

export default envTypeDefs;