import type { Meta, StoryObj } from "@storybook/react";
import { Button, ThemeButton } from "./Button";

const meta = {
    title: "shared/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: { children: "Test" },
    argTypes: {
        theme: ThemeButton,
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

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
