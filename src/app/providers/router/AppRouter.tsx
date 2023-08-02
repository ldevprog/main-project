import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./AppRouter.module.scss";
import { HomePage } from "pages/HomePage";
import { AboutPage } from "pages/AboutPage";

export function AppRouter() {
    return (
        <div className={classes.AppRouter}>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}
