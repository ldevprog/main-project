import { fireEvent, screen } from "@testing-library/react";
import { ComponentRender } from "@/shared/lib/tests/ComponentRender";
import { Sidebar } from "@/widgets/Sidebar";

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
