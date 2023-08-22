import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    const { src } = options.paths;

    return {
        extensions: [".tsx", ".ts", ".js", ".svg"],
        modules: ["node_modules", src],
        alias: {
            "@": src,
        },
        mainFiles: ["index"],
    };
}
