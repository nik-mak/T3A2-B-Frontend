import "./index.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alerts from "./components/Alerts";
import GlobalContexts from "./components/GlobalContexts";
import Catalogue from "./pages/Catalogue";
import Bag from "./pages/Bag";
import AdminDashboard from "./pages/AdminDashboard";
import PrivateRoute from "./components/auth/PrivateRoute";
import ActiveModals from "./components/modals/ActiveModals";
import PageNotFound from "./pages/PageNotFound";
// import Confirmation from "./components/Confirmation";

function App() {
  return (
    <GlobalContexts>
      <BrowserRouter>
        <Navbar />
        <ActiveModals />
        <Alerts />
        <Routes>
          <Route path="/" element={<Catalogue />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute roles={["admin", "staff"]}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/bag"
            element={
              <PrivateRoute roles={["admin", "staff", "customer"]}>
                <Bag />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </GlobalContexts>
  );
}

export default App;
