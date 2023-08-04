import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink";
import { AppLinkTheme } from "shared/ui/AppLink";
import cls from "./Navbar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <ul>
                <li>
                    <AppLink to="/" theme={AppLinkTheme.PRIMARY}>
                        {t("Main")}
                    </AppLink>
                </li>
                <li>
                    <AppLink to="/about" theme={AppLinkTheme.PRIMARY}>
                        {t("About")}
                    </AppLink>
                </li>
            </ul>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </nav>
    );
};
