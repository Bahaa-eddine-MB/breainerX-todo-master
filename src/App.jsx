import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import "./App.css";
import SignUpPage from "./pages/SignUp";
import DashboardPage from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
