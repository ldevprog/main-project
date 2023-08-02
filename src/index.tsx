import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "app";
import "app/styles/index.scss";
import { ThemeProvider } from "app/providers/ThemeProvider";

const root = createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
);
