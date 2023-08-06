import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useTranslation } from "react-i18next";
import { BugButton } from "app/providers/ErrorBoundary/ui/BugButton";

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
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <button type="button" onClick={toggleSidebar}>
                {t("toggle")}
            </button>
            <BugButton />
        </div>
    );
};
