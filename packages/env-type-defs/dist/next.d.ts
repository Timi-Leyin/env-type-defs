import type { NextConfig } from "next";
import { EnvTypeDefsConfig } from "./index";
export type Config = NextConfig & {
    envTypeDefs?: EnvTypeDefsConfig;
};
declare const envTypeDefs: (config: Config) => {
    [x: string]: any;
    allowedDevOrigins?: string[];
    exportPathMap?: (defaultMap: import("next/dist/server/config-shared").ExportPathMap, ctx: {
        dev: boolean;
        dir: string;
        outDir: string | null;
        distDir: string;
        buildId: string;
    }) => Promise<import("next/dist/server/config-shared").ExportPathMap> | import("next/dist/server/config-shared").ExportPathMap;
    i18n?: import("next/dist/server/config-shared").I18NConfig | null;
    eslint?: import("next/dist/server/config-shared").ESLintConfig;
    typescript?: import("next/dist/server/config-shared").TypeScriptConfig;
    headers?: () => Promise<import("next/dist/lib/load-custom-routes").Header[]>;
    rewrites?: () => Promise<import("next/dist/lib/load-custom-routes").Rewrite[] | {
        beforeFiles?: import("next/dist/lib/load-custom-routes").Rewrite[];
        afterFiles?: import("next/dist/lib/load-custom-routes").Rewrite[];
        fallback?: import("next/dist/lib/load-custom-routes").Rewrite[];
    }>;
    redirects?: () => Promise<import("next/dist/lib/load-custom-routes").Redirect[]>;
    excludeDefaultMomentLocales?: boolean;
    webpack?: import("next/dist/server/config-shared").NextJsWebpackConfig | null;
    trailingSlash?: boolean;
    env?: Record<string, string | undefined>;
    distDir?: string;
    cleanDistDir?: boolean;
    assetPrefix?: string;
    cacheHandler?: string | undefined;
    cacheMaxMemorySize?: number;
    useFileSystemPublicRoutes?: boolean;
    generateBuildId?: () => string | null | Promise<string | null>;
    generateEtags?: boolean;
    pageExtensions?: string[];
    compress?: boolean;
    poweredByHeader?: boolean;
    images?: import("next/dist/shared/lib/image-config").ImageConfig;
    devIndicators?: false | {
        appIsrStatus?: boolean;
        buildActivity?: boolean;
        buildActivityPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
        position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    };
    onDemandEntries?: {
        maxInactiveAge?: number;
        pagesBufferLength?: number;
    };
    amp?: {
        canonicalBase?: string;
    };
    deploymentId?: string;
    basePath?: string;
    sassOptions?: {
        implementation?: string;
        [key: string]: any;
    };
    productionBrowserSourceMaps?: boolean;
    reactProductionProfiling?: boolean;
    reactStrictMode?: boolean | null;
    reactMaxHeadersLength?: number;
    publicRuntimeConfig?: {
        [key: string]: any;
    };
    serverRuntimeConfig?: {
        [key: string]: any;
    };
    httpAgentOptions?: {
        keepAlive?: boolean;
    };
    staticPageGenerationTimeout?: number;
    crossOrigin?: "anonymous" | "use-credentials";
    compiler?: {
        reactRemoveProperties?: boolean | {
            properties?: string[];
        };
        relay?: {
            src: string;
            artifactDirectory?: string;
            language?: "typescript" | "javascript" | "flow";
            eagerEsModules?: boolean;
        };
        removeConsole?: boolean | {
            exclude?: string[];
        };
        styledComponents?: boolean | import("next/dist/server/config-shared").StyledComponentsConfig;
        emotion?: boolean | import("next/dist/server/config-shared").EmotionConfig;
        styledJsx?: boolean | {
            useLightningcss?: boolean;
        };
        define?: Record<string, string>;
    };
    output?: "standalone" | "export";
    transpilePackages?: string[];
    turbopack?: import("next/dist/server/config-shared").TurbopackOptions;
    skipMiddlewareUrlNormalize?: boolean;
    skipTrailingSlashRedirect?: boolean;
    modularizeImports?: Record<string, {
        transform: string | Record<string, string>;
        preventFullImport?: boolean;
        skipDefaultConversion?: boolean;
    }>;
    logging?: import("next/dist/server/config-shared").LoggingConfig | false;
    expireTime?: number;
    experimental?: import("next/dist/server/config-shared").ExperimentalConfig;
    bundlePagesRouterDependencies?: boolean;
    serverExternalPackages?: string[];
    outputFileTracingRoot?: string;
    outputFileTracingExcludes?: Record<string, string[]>;
    outputFileTracingIncludes?: Record<string, string[]>;
    watchOptions?: {
        pollIntervalMs?: number;
    };
    htmlLimitedBots?: RegExp;
};
export default envTypeDefs;
