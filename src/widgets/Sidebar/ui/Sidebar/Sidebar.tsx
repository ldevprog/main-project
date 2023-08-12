import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useTranslation } from "react-i18next";
import { BugButton } from "app/providers/ErrorBoundary/ui/BugButton";
import { Button } from "shared/ui/Button";

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
            <Button
                data-testid="button-toggle"
                type="button"
                onClick={toggleSidebar}
            >
                {t("toggle")}
            </Button>
            <BugButton />
        </div>
    );
};
