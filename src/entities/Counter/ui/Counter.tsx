/* eslint-disable i18next/no-literal-string */
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/shared/ui/Button";
import { StateSchema } from "@/app/providers/StoreProvider";
import { counterActions } from "@/entities/Counter";

interface CounterProps {
    className?: string;
}

export const Counter: FC<CounterProps> = ({ className }) => {
    const { value: counter } = useSelector(
        (state: StateSchema) => state.counter
    );
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1>{counter}</h1>
            <div>
                <Button onClick={() => increment()}>Increment</Button>
                <Button onClick={() => decrement()}>Decrement</Button>
            </div>
        </div>
    );
};
