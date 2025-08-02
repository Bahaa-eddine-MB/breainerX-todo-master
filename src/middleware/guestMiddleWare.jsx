import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/authContext";

const GuestMiddleware = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" replace />; // Redirect logged-in users
  }

  return <Outlet />;
};

export default GuestMiddleware;