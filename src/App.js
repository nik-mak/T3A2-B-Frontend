import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import ReactHome from "./pages/ReactHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alerts from "./components/Alerts";
import GlobalContexts from "./components/GlobalContexts";
// import UsersRoutes from "./routes/users";

// const userData = {
//   name: '',
//   email: '',
//   roles: '',
// }

function App() {
  return (
    <GlobalContexts>
      <BrowserRouter>
        <Navbar />
        <Alerts />
        <Routes>
          <Route path="/" element={<ReactHome />} />
          <Route path="/admin" element={<ReactHome />} />
          <Route path="/bag" element={<ReactHome />} />
        </Routes>
      </BrowserRouter>
    </GlobalContexts>
  );
}

export default App;
