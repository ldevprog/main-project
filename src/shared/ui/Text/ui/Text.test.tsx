import { render, screen } from "@testing-library/react";
import { Text, ThemeText } from "@/shared/ui/Text";

describe("Text", () => {
    test("render", () => {
        render(<Text text="error occured" />);
        expect(screen.getByText("error occured")).toBeInTheDocument();
    });

    test("error theme", () => {
        render(<Text text="error occured" theme={ThemeText.ERROR} />);
        expect(screen.getByTestId("text")).toHaveClass("error");
    });
});
