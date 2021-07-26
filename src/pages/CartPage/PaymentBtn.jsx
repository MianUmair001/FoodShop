import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

const PaymentBtn = ({ total }) => {
  let style = {
    size: "small",
    color: "black",
    shape: "rect",
    label: "checkout",
    tagline: false,
  };
  let env = "sandbox";
  let currency = "USD";
  total = total;
  return (
    <PayPalButton
      style={style}
      env={env}
      amount={total}
      currency={currency}
      // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
      onSuccess={(details, data, payment) => {
        alert("Transaction completed by " + details.payer.name.given_name);
        this.props.transSuccess(payment);
        // OPTIONAL: Call your server to save the transaction

        return fetch("/paypal-transaction-complete", {
          method: "post",
          body: JSON.stringify({
            orderId: data.orderID,
          }),
        });
      }}
      options={{
        clientId:
          "AadanmrEr0e65QD33ibKE7UFKqODHDkz_lQWszSEe-jkJC5poD7bkpJpn_ggZ2ckgnpn8oYWZ-CQPCtu",
        disableFunding: "credit,card",
      }}
    />
  );
};
export default PaymentBtn;
