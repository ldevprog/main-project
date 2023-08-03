import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Switch.module.scss";
import { Theme } from "app/providers/ThemeProvider";

interface SwitchProps {
    className?: string;
    theme: Theme;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Switch: FC<SwitchProps> = ({ className, theme, handleChange }) => {
    return (
        <label className={classNames(cls.Switch, {}, [className])}>
            <input
                className={cls.input}
                type="checkbox"
                checked={theme === Theme.DARK}
                onChange={(e) => handleChange(e)}
            />
            <span className={cls.roller}></span>
        </label>
    );
};
