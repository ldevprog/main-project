import type { Meta, StoryObj } from "@storybook/react";
import { LoginModal } from "./LoginModal";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "features/LoginModal",
    component: LoginModal,
    tags: ["autodocs"],
    args: { isOpen: true },
    argTypes: {},
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
