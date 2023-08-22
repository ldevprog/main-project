import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "@/shared/ui/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
    };

    return (
        <div className={classNames(cls.LangSwitcher, {}, [className])}>
            <Button
                className={cls.button}
                theme={ThemeButton.CLEAN}
                onClick={toggleLanguage}
            >
                {t("language")}
            </Button>
        </div>
    );
};
