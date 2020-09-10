import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const Cart = ({ props, mapDispatchToProps }) => {
  useEffect(() => {
    if (props.user) {
      console.log(props.user.id);
      mapDispatchToProps.createUserCart(props.user._id);
    }
  }, [props.user]);

  return (
    <>
      {props.isAuthenticated && props.user !== null ? (
        <>
          <h1>Cart</h1>
        </>
      ) : (
        <>
          <h1>Only authenticated users can add products to cart!</h1>
          <h3>
            If you still don't have account <Link to="/auth">Join us!</Link>
          </h3>
        </>
      )}
    </>
  );
};
