import { Counter } from "@/entities/Counter";
import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "@/shared/lib/tests/componentRender";

describe("Counter", () => {
    test("test render", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId("counter-value")).toHaveTextContent("10");
    });

    test("test increment", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const incrementBtn = screen.getByTestId("increment-btn");
        fireEvent.click(incrementBtn);
        expect(screen.getByTestId("counter-value")).toHaveTextContent("11");
    });

    test("test decrement", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const decrementBtn = screen.getByTestId("decrement-btn");
        fireEvent.click(decrementBtn);
        expect(screen.getByTestId("counter-value")).toHaveTextContent("9");
    });
});
