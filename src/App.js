import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import ReactHome from "./pages/ReactHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alerts from "./components/Alerts";
import GlobalContexts from "./components/GlobalContexts";
import Catalogue from "./pages/Catalogue";
import Bag from "./pages/Bag";
import AdminDashboard from "./pages/AdminDashboard";

// import Catalogue from "./pages/Catalogue";

function App() {
  return (
    <GlobalContexts>
      <BrowserRouter>
        <Navbar />
        <Alerts />
        <Routes>
          <Route path="/" element={<Catalogue />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/bag" element={<Bag />} />
        </Routes>
      </BrowserRouter>
    </GlobalContexts>
  );
}

export default App;
