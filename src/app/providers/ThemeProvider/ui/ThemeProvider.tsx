import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from "../lib/ThemeContext";

interface Props {
    children: ReactNode;
    themeProp: Theme;
}

export const ThemeProvider: FC<Props> = ({ children, themeProp }) => {
    const defaultTheme =
        (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

    const [theme, setTheme] = useState<Theme>(themeProp || defaultTheme);

    useEffect(() => {
        document.body.className = themeProp || theme;
    }, [theme, themeProp]);

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
