/* eslint-disable i18next/no-literal-string */
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button";
import { Modal } from "shared/ui/Modal";

function Main() {
    const { t } = useTranslation("main");

    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <>
            <h1>{t("Main")}</h1>
            <Button
                theme={ThemeButton.OUTLINE}
                onClick={() => setIsOpenModal(true)}
            >
                Open Modal
            </Button>
            <div>
                <Modal
                    isOpen={isOpenModal}
                    onClose={() => setIsOpenModal(false)}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, officiis quo cum cumque nobis obcaecati vero,
                    doloremque placeat, perspiciatis dolorem animi quos quidem
                    officia blanditiis in.
                </Modal>
            </div>
        </>
    );
}

export default Main;
