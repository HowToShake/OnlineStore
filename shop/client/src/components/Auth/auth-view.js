import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Login from "./login/login-connected";
import Register from "./register/register-connected";

export const Auth = ({ props, mapDispatchToProps }) => {
  let history = useHistory();

  useEffect(() => {
    mapDispatchToProps.clearErrors();

    if (props.isAuthenticated && props.user) {
      history.push("/");
    }
  }, [props.isAuthenticated, props.user]);

  const renderErrorMessage = () => {
    if (props.error.msg.msg !== undefined) {
      return (
        <>
          <div
            className="align-self-center alert alert-danger d-flex flex-column justify-content-center"
            role="alert"
            style={{ width: "25%", borderRadius: "10px" }}
          >
            <h2 className="pt-3 text-center alert-danger">
              {props.error.msg.msg}
            </h2>
          </div>
        </>
      );
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="d-flex flex-row justify-content-between pt-5 mt-5 pb-5">
        <div
          className="d-flex flex-column justify-content-center pt-5"
          style={{ width: "50vw", borderRight: "1px solid #5559" }}
        >
          <h1 className=" text-center">Login</h1>
          <div
            className="align-self-center pt-5 align-self-center"
            style={{ width: "50vw", height: "80%" }}
          >
            <Login />
          </div>
        </div>

        <div
          className="d-flex flex-column justify-content-center pt-5"
          style={{ width: "50vw" }}
        >
          <h1 className="text-center">Register</h1>
          <div
            className="align-self-center pt-5 align-self-center"
            style={{ width: "50vw", height: "80%" }}
          >
            <Register />
          </div>
        </div>
      </div>
      {renderErrorMessage()}
    </div>
  );
};
