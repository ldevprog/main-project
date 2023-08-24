import { Counter } from "@/entities/Counter";
import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation("about");

    return (
        <>
            <h1>{t("About")}</h1>
            <div>
                <Counter />
            </div>
        </>
    );
}

export default About;
