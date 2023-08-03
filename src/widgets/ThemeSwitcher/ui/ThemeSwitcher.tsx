import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { Switch } from "shared/ui/Switch";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, changeTheme } = useTheme();

    return (
        <button className={classNames(cls.ThemeSwitcher, {}, [className])}>
            <Switch theme={theme} handleChange={changeTheme} />
        </button>
    );
};
