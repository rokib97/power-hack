import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RequireContext } from "../../App";
import Loading from "../../components/Loading/Loading";

const RequireAuth = ({ children }) => {
  const { user, isLoading } = useContext(RequireContext);
  const location = useLocation();

  if (isLoading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
