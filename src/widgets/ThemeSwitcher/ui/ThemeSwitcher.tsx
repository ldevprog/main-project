import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { Switch } from "shared/ui/Switch";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, changeTheme } = useTheme();

    return (
        <div className={classNames(cls.ThemeSwitcher, {}, [className])}>
            <LightIcon className={classNames(cls.icon, {}, [cls.iconLight])} />
            <Switch theme={theme} handleChange={changeTheme} />
            <DarkIcon className={classNames(cls.icon, {}, [cls.iconDark])} />
        </div>
    );
};
