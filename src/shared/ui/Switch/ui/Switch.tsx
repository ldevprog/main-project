import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Switch.module.scss";

interface SwitchProps {
    className?: string;
    checked: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Switch: FC<SwitchProps> = ({
    className,
    checked,
    handleChange,
}) => {
    return (
        <label className={classNames(cls.Switch, {}, [className])}>
            <input
                className={cls.input}
                type="checkbox"
                checked={checked}
                onChange={(e) => handleChange(e)}
            />
            <span className={cls.roller}></span>
        </label>
    );
};
