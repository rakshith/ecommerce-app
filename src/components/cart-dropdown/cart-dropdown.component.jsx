import "./cart-dropdown.styles.scss";

import React from "react";
import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = (props) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
