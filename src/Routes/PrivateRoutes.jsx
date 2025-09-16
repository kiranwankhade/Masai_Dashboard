import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  let isAuthKey = JSON.parse(localStorage.getItem("token"));
  const { isAuth, token } = useSelector((state) => state.authReducer);

  console.log("Private Route", isAuth, token, "isAuthKey", isAuthKey);
  if (!isAuth && isAuthKey==null) {
    return <Navigate to="/login" />;
  }

  return children;
};
