import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage, RegistrationPage, LoginPage, Dashboard } from "./pages";

function BookChowkRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default BookChowkRoutes;
