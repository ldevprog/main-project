import { useTranslation } from "react-i18next";

function Main() {
    const { t } = useTranslation("main");

    return <h1>{t("Main")}</h1>;
}

export default Main;
