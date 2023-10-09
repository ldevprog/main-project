import { ReactNode, useEffect } from "react";
import { useStore } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";
import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from "@/app/providers/StoreProvider/config/StateSchema";
import { useAppDispatch } from "../../hooks/useAppDispatch/useAppDispatch";

export type ReducersList = {
    [reducerKey in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const { children, reducers, removeAfterUnmount } = props;

    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(
            ([reducerKey, reducer]: ReducersListEntry) => {
                store.reducerManager.add(reducerKey, reducer);
                dispatch({ type: `@INIT ${reducerKey} reducer` });
            }
        );

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(
                    ([reducerKey]: ReducersListEntry) => {
                        store.reducerManager.remove(reducerKey);
                        dispatch({ type: `@DESTROY ${reducerKey} reducer` });
                    }
                );
            }
        };

        // eslint-disable-next-line
    }, []);

    return <>{children}</>;
};
