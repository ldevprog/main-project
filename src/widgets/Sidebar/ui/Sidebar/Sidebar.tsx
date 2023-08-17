import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink";
import { ThemeAppLink } from "shared/ui/AppLink";
import SidebarLeft from "shared/assets/icons/sidebar-left.svg";
import SidebarRight from "shared/assets/icons/sidebar-right.svg";
import Home from "shared/assets/icons/home.svg";
import About from "shared/assets/icons/about.svg";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation();

    const toggleSidebar = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div className={cls.iconWrapper} onClick={toggleSidebar}>
                {collapsed ? (
                    <SidebarRight className={cls.icon} />
                ) : (
                    <SidebarLeft className={cls.icon} />
                )}
            </div>
            <ul>
                <li>
                    <AppLink
                        className={classNames(cls.link)}
                        to="/"
                        theme={ThemeAppLink.MAIN}
                    >
                        <div className={cls.linkIcon}>
                            <Home
                                className={classNames(cls.icon, {}, [
                                    cls.iconHome,
                                ])}
                            />
                        </div>
                        <div className={cls.linkText}>{t("Main")}</div>
                    </AppLink>
                </li>
                <li>
                    <AppLink
                        className={classNames(cls.link)}
                        to="/about"
                        theme={ThemeAppLink.MAIN}
                    >
                        <div className={cls.linkIcon}>
                            <About
                                className={classNames(cls.icon, {}, [
                                    cls.iconAbout,
                                ])}
                            />
                        </div>
                        <div className={cls.linkText}>{t("About")}</div>
                    </AppLink>
                </li>
            </ul>
        </div>
    );
};
