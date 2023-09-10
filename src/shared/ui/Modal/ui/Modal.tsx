import {
    MouseEvent,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { Portal } from "@/shared/ui/Portal";
import { useTheme } from "@/app/providers/ThemeProvider";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const CLOSE_DELAY = 150;

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, CLOSE_DELAY);
        }
    }, [onClose]);

    const keydownHandler = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeHandler();
            }
        },
        [closeHandler]
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", keydownHandler);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown", keydownHandler);
        };
    }, [isOpen, keydownHandler]);

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const { theme } = useTheme();

    const mods: Mods = { [cls._opened]: isOpen, [cls._isClosing]: isClosing };

    if (lazy && !isMounted) return null;

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
