import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "widgets/Sidebar";

describe("Sidebar", () => {
    test("Test render", () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId("sidebar"));
    });

    test("Test toggle", () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId("button-toggle");
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
