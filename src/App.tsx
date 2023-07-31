import { AppRouter } from "./components/AppRouter/AppRouter";
import { Navbar } from "./components/Navbar/Navbar";
import { useTheme } from "./theme/useTheme";

export function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Navbar></Navbar>
            <button onClick={toggleTheme}>Toggle theme</button>
            <AppRouter></AppRouter>
        </div>
    );
}
