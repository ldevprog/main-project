import { AppRouter } from "./components/AppRouter/AppRouter";
import { Navbar } from "./components/Navbar/Navbar";

export function App() {
    return (
        <div className="app">
            <Navbar></Navbar>
            <AppRouter></AppRouter>
        </div>
    );
}
