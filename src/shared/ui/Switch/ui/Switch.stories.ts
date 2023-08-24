import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "@/shared/Switch",
    component: Switch,
    tags: ["autodocs"],
    args: {
        checked: false,
    },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const DefaultDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Checked: Story = {
    args: { checked: true },
};
export const CheckedDark: Story = {
    args: { checked: true },
    decorators: [ThemeDecorator(Theme.DARK)],
};
