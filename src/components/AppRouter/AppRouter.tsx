import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./AppRouter.module.scss";

const Home = lazy(() => import("../../pages/Home"));
const About = lazy(() => import("../../pages/About"));

export function AppRouter() {
    return (
        <div className={classes.AppRouter}>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/about" Component={About} />
                </Routes>
            </Suspense>
        </div>
    );
}
