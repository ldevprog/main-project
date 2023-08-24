import type { Meta, StoryObj } from "@storybook/react";
import MainPage from "./MainPage";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "pages/MainPage",
    component: MainPage,
    tags: ["autodocs"],
    args: {},
    argTypes: {},
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
