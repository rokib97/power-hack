import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RequireContext } from "../../App";

const RequireAuth = ({ children }) => {
  const { auth } = useContext(RequireContext);

  const location = useLocation();
  if (!auth) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
