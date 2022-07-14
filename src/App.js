import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import ReactHome from "./pages/ReactHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alerts from "./components/Alerts";
import GlobalContexts from "./components/GlobalContexts";
import Catalogue from "./pages/Catalogue";
<<<<<<< HEAD
import Cart from "./components/Cart/Cart";
=======
import Bag from "./pages/Bag";
import AdminDashboard from "./pages/AdminDashboard";
>>>>>>> a0f893259cd609bd14827eaa152d56ed8ab5b58a

// import Catalogue from "./pages/Catalogue";

function App() {
  return (
    <GlobalContexts>
      <BrowserRouter>
        <Navbar />
        <Alerts />
        <Cart />
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
