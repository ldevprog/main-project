import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

interface InputProps {
    className?: string;
}

export const Input: FC<InputProps> = ({ className }) => {
    return <input className={classNames(cls.Input, {}, [className])} />;
};
