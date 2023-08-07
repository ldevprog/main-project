import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
    const { isDev } = options;

    const babelLoader = {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"],
        },
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        loader: "file-loader",
        options: {
            name() {
                return isDev ? "[path][name].[ext]" : "[contenthash].[ext]";
            },
        },
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
    };

    const cssLoader = buildCssLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    return [babelLoader, fileLoader, svgLoader, cssLoader, typescriptLoader];
}
