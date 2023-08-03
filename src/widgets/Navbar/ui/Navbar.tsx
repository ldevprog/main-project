import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink";
import { AppLinkTheme } from "shared/ui/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <ul>
                <li>
                    <AppLink to="/" theme={AppLinkTheme.INVERTED_PRIMARY}>
                        Home page
                    </AppLink>
                </li>
                <li>
                    <AppLink to="/about" theme={AppLinkTheme.INVERTED_PRIMARY}>
                        About page
                    </AppLink>
                </li>
            </ul>
        </nav>
    );
};
