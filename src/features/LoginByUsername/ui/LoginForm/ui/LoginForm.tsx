import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { Input } from "@/shared/ui/Input";

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input className={cls.input} />
            <Input className={cls.input} />
        </div>
    );
};
