import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ThemeDecorator } from "shared/lib/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "widgets/ThemeSwitcher",
    component: ThemeSwitcher,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
