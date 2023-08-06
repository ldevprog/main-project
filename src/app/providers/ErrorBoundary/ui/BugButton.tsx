import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button";

export const BugButton = () => {
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (isError) {
            throw new Error();
        }
    }, [isError]);

    const { t } = useTranslation();

    const onThrow = () => setIsError(true);

    return (
        <Button theme={ThemeButton.CLEAN} onClick={onThrow}>
            {t("Throw error")}
        </Button>
    );
};
