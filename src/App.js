import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alerts from "./components/Alerts";
import GlobalContexts from "./components/GlobalContexts";
import Catalogue from "./pages/Catalogue";
import Cart from "./components/Cart/Cart";
import Bag from "./pages/Bag";
import AdminDashboard from "./pages/AdminDashboard";
import PrivateRoute from "./components/Auth/PrivateRoute";
import ActiveModals from "./components/modals/ActiveModals";

function App() {
  return (
    <GlobalContexts>
      <BrowserRouter>
        <Navbar />
        <ActiveModals/>
        <Alerts />
        <Routes>
          <Route path="/" element={<Catalogue />} />
          <Route path="/admin" element={<PrivateRoute roles={["admin","staff"]}><AdminDashboard /></PrivateRoute>} />
          <Route path="/bag" element={<PrivateRoute roles={["admin","staff", "customer"]}><Bag /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </GlobalContexts>
  );
}

export default App;
