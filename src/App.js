
import "./App.css";
import "./index.css"
import Navbar from "./components/Navbar";
import ReactHome from "./pages/ReactHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ReactHome />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
