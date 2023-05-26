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
import { AuthenticateRoute } from "./component/AuthenticateRoute";

function BookChowkRoutes() {
  const { AuthenticatedRoute, UnAuthenticatedRoute } = AuthenticateRoute();
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <UnAuthenticatedRoute>
                <LandingPage />
              </UnAuthenticatedRoute>
            }
          />
          <Route
            path="/registration"
            element={
              <UnAuthenticatedRoute>
                <RegistrationPage />
              </UnAuthenticatedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <UnAuthenticatedRoute>
                <LoginPage />
              </UnAuthenticatedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <AuthenticatedRoute>
                <Dashboard />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <AuthenticatedRoute>
                <ProfilePage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/book/:section"
            element={
              <AuthenticatedRoute>
                <BookSectionPage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/book/:type/:bookId"
            element={
              <AuthenticatedRoute>
                <BuyRentPage />
              </AuthenticatedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default BookChowkRoutes;
