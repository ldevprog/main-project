import type { Meta, StoryObj } from "@storybook/react";
import { PageError } from "./PageError";
import { ThemeDecorator } from "shared/lib/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "widgets/PageError",
    component: PageError,
    args: {},
    argTypes: {},
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
