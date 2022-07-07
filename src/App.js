
import "./App.css";
import "./index.css"
import Navbar from "./components/Navbar";
import ReactHome from "./pages/ReactHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersRoutes from "./routes/users";

const userData = {
  name: '',
  email: '',
  roles: '',
}

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
