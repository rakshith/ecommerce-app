import "./stripe-button.styles.scss";

import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HPAkUB6LqJLij1nXHyKw7FIWEJ3ZvqVqak9ogTE38r7D9IlgKWHaxfuDccg3UOdgXBZkwTIYVGCA0XslZcgWmAw008QSNS0Je";

  const onToken = (token) => {
    console.log("stripe token", token);
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successfull");
      })
      .catch((error) => {
        console.error("Payment error", error);
        alert(
          "There was an issue with your payment. Please sure you use the provided credit card"
        );
      });
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;
