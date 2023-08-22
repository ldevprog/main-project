import { Suspense } from "react";
import { AppRouter } from "./providers/router/ui/AppRouter";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";

export function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content">
                    <Sidebar />
                    <div className="content-body">
                        <AppRouter />
                    </div>
                </div>
            </Suspense>
        </div>
    );
}
