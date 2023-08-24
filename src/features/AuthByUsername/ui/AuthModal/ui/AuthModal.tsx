import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AuthModal.module.scss";
import { Modal } from "@/shared/ui/Modal";
import { AuthForm } from "../../AuthForm";

interface AuthModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const AuthModal: FC<AuthModalProps> = (props) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal
            className={classNames(cls.AuthModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >
            <AuthForm />
        </Modal>
    );
};
