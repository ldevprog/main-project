import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";

const meta = {
    title: "features/LoginForm",
    component: LoginForm,
    tags: ["autodocs"],
    args: {},
    argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithError: Story = {
    decorators: [StoreDecorator({ loginForm: { error: "Error" } })],
};

export const Loading: Story = {
    decorators: [StoreDecorator({ loginForm: { isLoading: true } })],
};
