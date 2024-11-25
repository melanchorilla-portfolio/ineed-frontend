import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading, sessionValidated } = useSelector(
    (state) => state.auth
  );

  if (isLoading || (!sessionValidated && isAuthenticated)) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
