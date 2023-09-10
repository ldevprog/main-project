import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
} from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    className?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        placeholder,
        value,
        onChange,
        type = "text",
        autofocus,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            inputRef.current?.focus();
        }
    }, [autofocus]);

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            {...otherProps}
            ref={inputRef}
            className={classNames(cls.Input, {}, [className])}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChangeInput}
        />
    );
});
