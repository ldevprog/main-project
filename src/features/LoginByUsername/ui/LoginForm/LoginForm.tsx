import { FormEvent, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { Input } from "@/shared/ui/Input";
import { Button, ThemeButton } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUsername = (val: string) => {
        setUsername(val);
    };
    const onChangePassword = (val: string) => {
        setPassword(val);
    };

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form
            className={classNames(cls.LoginForm, {}, [className])}
            onSubmit={onFormSubmit}
        >
            <div className={cls.inputs}>
                <Input
                    className={cls.input}
                    placeholder={t("username")}
                    value={username}
                    onChange={onChangeUsername}
                    autofocus
                />
                <Input
                    className={cls.input}
                    type="password"
                    placeholder={t("password")}
                    value={password}
                    onChange={onChangePassword}
                />
            </div>
            <Button
                className={cls.button}
                theme={ThemeButton.OUTLINE}
                type="submit"
            >
                {t("Log In")}
            </Button>
        </form>
    );
};
