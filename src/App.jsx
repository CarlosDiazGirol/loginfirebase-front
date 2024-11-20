import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from "./contexts/UserContext"; // Importa como exportación por defecto
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import ProtectedRoute from "./components/ProtectedRoute";
import LogoutButton from "./components/LogoutButton";

function App() {
  return (
    <UserProvider>
      <Router>
        <LogoutButton />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/feed"
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
