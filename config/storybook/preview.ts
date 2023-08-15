import type { Preview } from "@storybook/react";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/lib/storybook/ThemeDecorator";
import { RouterDecorator } from "shared/lib/storybook/RouterDecorator";
import { Theme } from "app/providers/ThemeProvider";

const preview: Preview = {
    parameters: {
        layout: "fullscreen",
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;
