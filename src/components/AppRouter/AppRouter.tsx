import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./AppRouter.module.scss";

import { HomePageAsync } from "../../pages/HomePage/HomePage.async";
import { AboutPageAsync } from "../../pages/AboutPage/AboutPage.async";

export function AppRouter() {
    return (
        <div className={classes.AppRouter}>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePageAsync />} />
                    <Route path="/about" element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
}
