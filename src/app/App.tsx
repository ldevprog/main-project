import { AppRouter } from "app/providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { Sidebar } from "widgets/Sidebar";

export function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <div className="content">
                <Sidebar />
                <div className="body">
                    <AppRouter />
                </div>
            </div>
        </div>
    );
}
