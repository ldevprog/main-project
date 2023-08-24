import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
    theme: Theme;
    changeTheme: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    function changeTheme(e: React.ChangeEvent<HTMLInputElement>) {
        const newTheme = e.target.checked ? Theme.DARK : Theme.LIGHT;

        setTheme(newTheme);

        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {
        theme,
        changeTheme,
    };
}
