export type EnvTypeDefsConfig = {
    watch?: boolean;
};
type envT = {
    [key: string]: string;
};
declare const envTypeDefs: (config?: EnvTypeDefsConfig) => envT;
export default envTypeDefs;
