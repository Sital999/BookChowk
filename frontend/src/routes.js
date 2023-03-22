import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LandingPage,
  RegistrationPage,
  LoginPage,
  Dashboard,
  ProfilePage,
} from "./pages";

function BookChowkRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default BookChowkRoutes;
