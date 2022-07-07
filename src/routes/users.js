import { Route, Routes } from "react-router-dom";

export default function UsersRoutes() {
    return (
        <Routes>
            <Route path="users">
                <Route path=":id" />
                <Route path="new" />
                <Route path="" />
            </Route>
        </Routes>
    )
}