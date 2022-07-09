import { Route, Routes } from "react-router-dom";

// Example Route for when/if our routes get more complex
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