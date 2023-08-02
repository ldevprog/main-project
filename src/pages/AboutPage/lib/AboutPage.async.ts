import { lazy } from "react";

export const AboutPageAsync = lazy(
    () =>
        new Promise((res) => {
            // @ts-ignore
            setTimeout(() => res(import("../ui/AboutPage")), 300);
        })
);
