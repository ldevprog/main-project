import type { Meta, StoryObj } from "@storybook/react";
import AboutPage from "./AboutPage";
import { ThemeDecorator } from "shared/lib/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
   title: "pages/AboutPage",
   component: AboutPage,
   tags: ["autodocs"],
   args: {},
   argTypes: {},
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
   decorators: [ThemeDecorator(Theme.DARK)],
};