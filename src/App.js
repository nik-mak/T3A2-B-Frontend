import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import ReactHome from "./pages/ReactHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alerts from "./components/Alerts";
import GlobalContexts from "./components/GlobalContexts";
import Catalogue from "./pages/Catalogue";
import Cart from "./components/Cart/Cart";

function App() {

  return (
    <GlobalContexts>
      <BrowserRouter>
        <Navbar />
        <Alerts />
        <Cart />
        <Routes>
          <Route path="/" element={<Catalogue />} />
          <Route path="/admin" element={<ReactHome />} />
          <Route path="/bag" element={<ReactHome />} />
        </Routes>
      </BrowserRouter>
    </GlobalContexts>
  );
}

export default App;
