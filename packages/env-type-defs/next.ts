import type { NextConfig } from "next";
import envTypeDefsMain, { EnvTypeDefsConfig } from "./index";

export type Config = NextConfig & {
  envTypeDefs?: EnvTypeDefsConfig;
};
const envTypeDefs = (config: Config) => {
  const { envTypeDefs, ...rest } = config;
  envTypeDefsMain(envTypeDefs);
  return rest;
};

export default envTypeDefs;
