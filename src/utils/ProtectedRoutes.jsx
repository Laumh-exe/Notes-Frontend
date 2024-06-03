import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export function ProtectedRoutes({ children, isLoggedIn, isLoading }) {
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoggedIn && !isLoading) {
      return navigate("/login" );
    }
  }, [isLoggedIn , isLoading]);

  return children;
}

export default ProtectedRoutes;

ProtectedRoutes.propTypes = {
  isLoggedIn: PropTypes.bool,
  isLoading: PropTypes.bool,
};
