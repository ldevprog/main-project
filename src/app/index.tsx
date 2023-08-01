import { AppRouter } from "./router/AppRouter";
import { Navbar } from "../widgets/Navbar/Navbar";
import { useTheme } from "./providers/theme/useTheme";
import { classNames } from "../shared/lib/classNames";

export function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar></Navbar>
            <button onClick={toggleTheme}>Toggle theme</button>
            <AppRouter></AppRouter>
        </div>
    );
}
