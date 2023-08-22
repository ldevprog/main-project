import { buildSvgLoader } from "../build/loaders/buildSvgLoader";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";
import path from "path";
import { Configuration, RuleSetRule } from "webpack";

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        entry: "",
        build: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };

    config!.resolve!.alias = { "@": paths.src };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push(".ts", ".tsx");

    config.module.rules?.push(buildCssLoader(true));

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/.svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push(buildSvgLoader());

    return config;
};
