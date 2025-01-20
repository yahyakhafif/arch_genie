import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SigninPage from './components/SigninPage';
import MainPage from './components/MainPage';
import SignupPage from './components/SignupPage';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './components/AuthProvider';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/"
              element={<MainPage />}
            />
            <Route
              path="/signin"
              element={
                <PrivateRoute>
                  <SigninPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PrivateRoute>
                  <SignupPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}
export default App;
