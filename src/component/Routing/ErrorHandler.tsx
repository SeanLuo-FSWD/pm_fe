import React from "react";
import { useLocation, Redirect } from "react-router-dom";
import Error from "../pages/Error/Error";
import { get } from "lodash";

const ErrorHandler = ({ children }: any) => {
  const location = useLocation();
  console.log("ErrorHandler called");

  const err_msg = get(location.state, "errorMsg");

  let goback_path;
  let redirect_path = "/error";

  if (err_msg) {
    console.log("ErrorHandler found error :");
    console.log(err_msg);
  }

  return err_msg ? (
    <Redirect
      push
      to={{
        pathname: redirect_path,
        state: { err_msg, goback_path },
      }}
    />
  ) : (
    children
  );
};

export default ErrorHandler;
