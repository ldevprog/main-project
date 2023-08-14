import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink";
import { ThemeAppLink } from "shared/ui/AppLink";
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
                    <AppLink to="/" theme={ThemeAppLink.MAIN}>
                        {t("Main")}
                    </AppLink>
                </li>
                <li>
                    <AppLink to="/about" theme={ThemeAppLink.MAIN}>
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
