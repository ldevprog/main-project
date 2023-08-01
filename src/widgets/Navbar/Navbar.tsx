import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";

export function Navbar() {
    return (
        <nav className={classes.Navbar}>
            <ul>
                <li>
                    <Link to="/">Home page</Link>
                </li>
                <li>
                    <Link to="/about">About page</Link>
                </li>
            </ul>
        </nav>
    );
}
