import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateSession } from "../features/auth/authSlice";

const SessionManager = ({ children }) => {
  const dispatch = useDispatch();
  const { sessionValidated, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  // useEffect(() => {
  //   if (!sessionValidated && isAuthenticated) {
  //     dispatch(validateSession());
  //   }
  // }, [dispatch, sessionValidated, isAuthenticated]);

  useEffect(() => {
      dispatch(validateSession());
  }, []);

  return children;
};

export default SessionManager;