import type { Meta, StoryObj } from "@storybook/react";
import { AuthModal } from "./AuthModal";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "shared/AuthModal",
    component: AuthModal,
    tags: ["autodocs"],
    args: {},
    argTypes: {},
} satisfies Meta<typeof AuthModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
