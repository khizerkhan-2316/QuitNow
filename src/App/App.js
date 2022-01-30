import './App.css';
import Login from '../Pages/Login/Login.js';
import CreateLogin from '../Pages/CreateLogin/CreateLogin.js';
import ResetPassword from '../Pages/ResetPassword/ResetPassword.js';
import FirebaseApp from '../Firebase.js';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      setLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    setLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/signup"
          element={
            <CreateLogin
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              error={error}
              setError={setError}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              confirmation={confirmation}
              setConfirmation={setConfirmation}
              setLoggedIn={setLoggedIn}
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path="/login"
          element={
            loggedIn ? (
              <Navigate to={'/'} />
            ) : !loggedIn ? (
              <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                error={error}
                setError={setError}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                setLoggedIn={setLoggedIn}
                loggedIn={loggedIn}
              />
            ) : (
              ''
            )
          }
        />
        <Route
          exact
          path="/reset"
          element={
            <ResetPassword
              email={email}
              setEmail={setEmail}
              error={error}
              setError={setError}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              confirmation={confirmation}
              setConfirmation={setConfirmation}
            />
          }
        ></Route>

        <Route
          path="/"
          element={
            !loggedIn ? (
              <Navigate to="/login" />
            ) : (
              <button onClick={logoutHandler}>LOG OUT</button>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
