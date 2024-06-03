import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import { Route, Routes, useNavigate } from "react-router-dom";

import About from "./page/About.jsx";
import PageNotFound from "./page/PageNotFound.jsx";
import Login from "./page/Login.jsx";
import AppLayout from "./layout/AppLayout.jsx";
import CreateUser from "./page/CreateUser.jsx";
import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";
import UserOverview from "./page/admin/UserOverview.jsx";

import MyNotes from "./page/MyNotes.jsx";

function App() {
  const [userJustCreated, setUserJustCreated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState({
    email: "",
    name: "",
    roles: ["user"],
  });

  const navigate = useNavigate();

  const checkTokenExpiry = (exp) => {
    return Date.now() >= exp * 1000;
  };

  useEffect(() => {
    // Check the token right away
    checkToken();

    // Then check the token every 15 minutes
    const intervalId = setInterval(checkToken, 15 * 60 * 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (!checkTokenExpiry(decodedToken.exp)) {
          setIsLoggedIn(true);
          setLoggedInUser({
            email: decodedToken.email,
            name: decodedToken.name,
            roles: decodedToken.roles,
          });
        } else {
          setIsLoggedIn(false);
          setErrorMessage("Your session has expired. Please log in again.");
          localStorage.clear();
        }
      } catch (e) {
        setIsLoggedIn(false);
        localStorage.clear();
      }
    } else {
      setIsLoggedIn(false);
    }
    setIsLoading(false);
  };

  return (
    <Routes>
      <Route
        element={
          <ProtectedRoutes isLoggedIn={isLoggedIn} location={location} isLoading={isLoading}>
            <AppLayout
              setIsLoggedIn={setIsLoggedIn}
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
            />
          </ProtectedRoutes>
        }
      >
        <Route path="/" element={<MyNotes />} />
        <Route path="/adminPage" element={<UserOverview />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<PageNotFound />} />
      </Route>
      <Route
        path="/login"
        element={
          <Login
            setErrorMessage={setErrorMessage}
            errorMessage={errorMessage}
            setIsLoggedIn={setIsLoggedIn}
            setLoggedInUser={setLoggedInUser}
            userJustCreated={userJustCreated}
            setUserJustCreated={setUserJustCreated}
          />
        }
      />
      <Route
        path="/createUser"
        element={<CreateUser setUserJustCreated={setUserJustCreated} />}
      />
    </Routes>
  );
}

export default App;
