import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import DefaultLayout from "../layouts/DefaultLayout";
export default function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
            <Route path="/" index element={<Home />} />
            </Route>
        </Routes>
    );
}