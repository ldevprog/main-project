import { Suspense } from "react";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { AppRouter } from "app/providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { classNames } from "shared/lib/classNames/classNames";

export function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content">
                    <Sidebar />
                    <div className="body">
                        <AppRouter />
                    </div>
                </div>
            </Suspense>
        </div>
    );
}
