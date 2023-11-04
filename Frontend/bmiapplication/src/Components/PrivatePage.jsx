
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoutes = ({Children}) => {
  const isAuth = useSelector((store) => store.authenication.isAuth);
  const location = useLocation();

  if(!isAuth){
    return <Navigate to="/login" state={location.pathname} replace={true} />
  }
  return Children
};
