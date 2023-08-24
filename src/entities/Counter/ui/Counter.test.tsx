import { Counter } from "@/entities/Counter";
import { fireEvent, screen } from "@testing-library/react";
import { ComponentRender } from "@/shared/lib/tests/ComponentRender";

describe("Counter", () => {
    test("test render", () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId("counter-value")).toHaveTextContent("10");
    });

    test("test increment", () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const incrementBtn = screen.getByTestId("increment-btn");
        fireEvent.click(incrementBtn);
        expect(screen.getByTestId("counter-value")).toHaveTextContent("11");
    });

    test("test decrement", () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const decrementBtn = screen.getByTestId("decrement-btn");
        fireEvent.click(decrementBtn);
        expect(screen.getByTestId("counter-value")).toHaveTextContent("9");
    });
});
