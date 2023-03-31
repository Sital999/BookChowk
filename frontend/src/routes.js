import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LandingPage,
  RegistrationPage,
  LoginPage,
  Dashboard,
  ProfilePage,
  BookSectionPage,
  BuyRentPage,
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
          <Route path="/book/:section" element={<BookSectionPage />} />
          <Route path="/book/:type/:bookId" element={<BuyRentPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default BookChowkRoutes;
