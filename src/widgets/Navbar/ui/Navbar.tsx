import cls from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { LangSwitcher } from "@/widgets/LangSwitcher";
import { Button, ThemeButton } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { AuthModal } from "@/features/AuthByUsername/ui/AuthModal";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const { t } = useTranslation();

    return (
        <>
            <nav className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher />
                    <Button
                        className={cls.signInBtn}
                        theme={ThemeButton.OUTLINE}
                        onClick={() => setIsAuthModal(true)}
                    >
                        {t("Sign In")}
                    </Button>
                </div>
            </nav>
            <AuthModal
                isOpen={isAuthModal}
                onClose={() => setIsAuthModal(false)}
            />
        </>
    );
};
