import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, ThemeAppLink } from "./AppLink";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "shared/AppLink",
    component: AppLink,
    tags: ["autodocs"],
    args: { children: "Test", to: "/" },
    argTypes: {
        theme: ThemeAppLink,
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const DefaultDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Main: Story = {
    args: {
        theme: ThemeAppLink.MAIN,
    },
};
export const MainDark: Story = {
    args: {
        theme: ThemeAppLink.MAIN,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
    args: {
        theme: ThemeAppLink.SECONDARY,
    },
};
export const SecondaryDark: Story = {
    args: {
        theme: ThemeAppLink.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedMain: Story = {
    args: {
        theme: ThemeAppLink.INVERTED_MAIN,
    },
};
export const InvertedMainDark: Story = {
    args: {
        theme: ThemeAppLink.INVERTED_MAIN,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
