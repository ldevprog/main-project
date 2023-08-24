import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "shared/Modal",
    component: Modal,
    tags: ["autodocs"],
    args: {
        isOpen: true,
        children: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Esse, officiis quo cum cumque nobis obcaecati vero,
            doloremque placeat, perspiciatis dolorem animi quos quidem
            officia blanditiis in.`,
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
