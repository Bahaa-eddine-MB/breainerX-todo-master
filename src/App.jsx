import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import "./App.css";
import SignUpPage from "./pages/SignUp";
import DashboardPage from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFound";
import { AuthProvider } from "./hooks/authContext";
import GuestMiddleware from "./middleware/guestMiddleWare";
import AuthMiddleware from "./middleware/authMiddleWare";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          {/* Guest API Middleware */}
          <Routes>
            <Route path="/" element={<GuestMiddleware />}>
              <Route path="sign-up" element={<SignUpPage />} />
              <Route path="sign-in" element={<LoginPage />} />
            </Route>
            <Route path="/dashboard" element={<AuthMiddleware />}>
              <Route index element={<DashboardPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
