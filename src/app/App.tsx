import { AppRouter } from "app/providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";

import TestPng from "shared/assets/icons/test-png.png";

export function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <AppRouter />
            <img src={TestPng} alt="" />
        </div>
    );
}
