import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Loader.module.scss";

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <span className={classNames(cls.Loader, {}, [className])}></span>
    );
};
