import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AuthForm.module.scss";

interface AuthFormProps {
    className?: string;
}

export const AuthForm: FC<AuthFormProps> = ({ className }) => {
    return (
        <div className={classNames(cls.AuthForm, {}, [className])}>
            <input type="text" />
            <input type="text" />
        </div>
    );
};
