import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { ThemeDecorator } from "shared/lib/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "widgets/Sidebar",
    component: Sidebar,
    tags: ["autodocs"],
    args: {},
    argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
