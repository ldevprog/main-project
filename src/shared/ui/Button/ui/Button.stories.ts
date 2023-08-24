import type { Meta, StoryObj } from "@storybook/react";
import { Button, ThemeButton } from "./Button";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "shared/Button",
    component: Button,
    tags: ["autodocs"],
    args: { children: "Test" },
    argTypes: {
        theme: ThemeButton,
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Clean: Story = {
    args: {
        theme: ThemeButton.CLEAN,
    },
};

export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlineDark: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
