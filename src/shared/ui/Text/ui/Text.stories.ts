import type { Meta, StoryObj } from "@storybook/react";
import { Text, ThemeText } from "./Text";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "shared/Text",
    component: Text,
    tags: ["autodocs"],
    args: {
        title: "Title",
        text: "text",
    },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
    args: { theme: ThemeText.ERROR },
};
export const ErrorDark: Story = {
    args: { theme: ThemeText.ERROR },
    decorators: [ThemeDecorator(Theme.DARK)],
};
