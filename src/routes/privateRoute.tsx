import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAppContext } from "context/context";

interface IPrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = (props: IPrivateRouteProps) => {
  const { userToken } = useAppContext();

  if (!userToken) return <Navigate to="/login"/>

  return (
    <React.Fragment>
      {props.children} 
    </React.Fragment>
  )
}

export default PrivateRoute;