import { StoryFn } from "@storybook/react";
import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";

export const StoreDecorator =
    (state: DeepPartial<StateSchema>) => (Story: StoryFn) => {
        return (
            <StoreProvider initialState={state}>
                <Story />
            </StoreProvider>
        );
    };
