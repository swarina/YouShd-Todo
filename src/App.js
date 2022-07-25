import "./App.css";

// Components
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Route
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
