import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export enum ThemeText {
    DEFAULT = "default",
    ERROR = "error",
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: ThemeText;
}

export const Text = (props: TextProps) => {
    const { className, title, text, theme = ThemeText.DEFAULT } = props;

    return (
        <div
            data-testid="text"
            className={classNames(cls.Text, {}, [className, cls[theme]])}
        >
            {title && <div className={cls.title}>{title}</div>}
            {text && <div className={cls.text}>{text}</div>}
        </div>
    );
};
