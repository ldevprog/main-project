import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "@/widgets/Sidebar";
import { ComponentRender } from "@/shared/lib/tests/ComponentRender";

describe("Sidebar", () => {
    test("Test render", () => {
        ComponentRender(<Sidebar />);
        expect(screen.getByTestId("sidebar"));
    });

    test("Test toggle", () => {
        ComponentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId("sidebar-toggler");
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
