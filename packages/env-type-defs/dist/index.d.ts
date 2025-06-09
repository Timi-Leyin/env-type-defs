export type EnvTypeDefsConfig = {
    watch?: boolean;
};
declare const envTypeDefs: (config?: EnvTypeDefsConfig) => {
    [key: string]: string;
};
export default envTypeDefs;
