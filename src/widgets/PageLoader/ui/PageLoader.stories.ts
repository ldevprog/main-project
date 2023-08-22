import type { Meta, StoryObj } from "@storybook/react";
import { PageLoader } from "./PageLoader";
import { ThemeDecorator } from "@/shared/lib/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "widgets/PageLoader",
    component: PageLoader,
    tags: ["autodocs"],
    args: {},
    argTypes: {},
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
