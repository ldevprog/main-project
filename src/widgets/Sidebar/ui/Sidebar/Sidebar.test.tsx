import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "@/widgets/Sidebar";
import { componentRender } from "@/shared/lib/tests/componentRender";

describe("Sidebar", () => {
    test("Test render", () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId("sidebar"));
    });

    test("Test toggle", () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId("sidebar-toggler");
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
