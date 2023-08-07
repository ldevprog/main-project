import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./PageError.module.scss";
import { Button, ThemeButton } from "shared/ui/Button";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <div className={cls.textInfo}>
                <div>{t("An error occurred")}</div>
                <div>{t("Try reload")}</div>
            </div>
            <Button
                theme={ThemeButton.OUTLINE}
                className={cls.btnReload}
                onClick={reloadPage}
            >
                {t("Reload")}
            </Button>
        </div>
    );
};
