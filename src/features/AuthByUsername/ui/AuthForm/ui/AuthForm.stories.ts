import type { Meta, StoryObj } from "@storybook/react";
import { AuthForm } from "./AuthForm";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "shared/AuthForm",
    component: AuthForm,
    tags: ["autodocs"],
    args: {},
    argTypes: {},
} satisfies Meta<typeof AuthForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
