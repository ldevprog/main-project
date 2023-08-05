import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import cls from "./AppRouter.module.scss";
import { Loader } from "shared/ui/Loader";

export function AppRouter() {
    return (
        <div className={cls.AppRouter}>
            <Suspense fallback={<Loader />}>
                <Routes>
                    {Object.values(routeConfig).map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
}
