import cls from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { LangSwitcher } from "@/widgets/LangSwitcher";
import { Button, ThemeButton } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { LoginModal } from "@/features/LoginByUsername";
import { useSelector } from "react-redux";
import { getLoginData, userActions } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const dispatch = useAppDispatch();
    const [isLoginModal, setIsLoginModal] = useState(false);
    const user = useSelector(getLoginData);

    const { t } = useTranslation();

    useEffect(() => {
        if (user) {
            setIsLoginModal(false);
        }
    }, [user]);

    const logoutHandler = () => {
        dispatch(userActions.clearLoginData());
    };

    return (
        <>
            <nav className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher />
                    {user ? (
                        <Button
                            className={cls.signInBtn}
                            theme={ThemeButton.OUTLINE}
                            onClick={logoutHandler}
                        >
                            {t("Log Out")}
                        </Button>
                    ) : (
                        <Button
                            className={cls.signInBtn}
                            theme={ThemeButton.OUTLINE}
                            onClick={() => setIsLoginModal(true)}
                        >
                            {t("Log In")}
                        </Button>
                    )}
                </div>
            </nav>

            <LoginModal
                isOpen={isLoginModal}
                onClose={() => setIsLoginModal(false)}
            />
        </>
    );
};
