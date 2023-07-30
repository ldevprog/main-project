import webpack from "webpack";
import "webpack-dev-server";
import TerserPlugin from "terser-webpack-plugin";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";

export function buildWebpackConfig(
    options: BuildOptions
): webpack.Configuration {
    const { mode, paths, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        devtool: isDev && "inline-source-map",
        devServer: isDev ? buildDevServer(options) : undefined,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        optimization: {
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                }),
            ],
        },
        plugins: buildPlugins(options),
    };
}
