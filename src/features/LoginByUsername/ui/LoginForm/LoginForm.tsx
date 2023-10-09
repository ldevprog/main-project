import { FormEvent, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import cls from "./LoginForm.module.scss";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input } from "@/shared/ui/Input";
import { Button, ThemeButton } from "@/shared/ui/Button";
import { Text, ThemeText } from "@/shared/ui/Text";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import {
    DynamicModuleLoader,
    ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (val: string) => {
            dispatch(loginActions.setUsername(val));
        },
        [dispatch]
    );
    const onChangePassword = useCallback(
        (val: string) => {
            dispatch(loginActions.setPassword(val));
        },
        [dispatch]
    );

    const onFormSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            dispatch(loginByUsername({ username, password }));
        },
        [dispatch, username, password]
    );

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={cls.LoginForm}>
                <Text title={t("Log In Form")} />
                <div className={cls.errorText}>
                    <Text text={error} theme={ThemeText.ERROR} />
                </div>
                <form
                    className={classNames(cls.form, {}, [className])}
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
                        disabled={isLoading}
                    >
                        {t("Log In")}
                    </Button>
                </form>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
