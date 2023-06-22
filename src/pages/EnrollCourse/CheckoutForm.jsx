import React, { useContext, useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import "./Common.css";
import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";

const CheckoutForm = () => {
  const {user} = useContext(AuthContext)
  const stripe = useStripe();
  const elements = useElements();

  const [cardError, setCartError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(()=>{
    // axios.post(`${import.meta.env.VITE_API_URL}/create-payment-intent`,{price})
    //     .then(data =>{
    //         console.log(data.data.clientSecret);
    //         setClientSecret(data.data.clientSecret);
    //       })
  },[]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCartError(error.message);
    } else {
      setCartError("");
      console.log("payment method", paymentMethod);
    }

    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'anonymous' ,
            email: user?.email || 'unknown' ,
          },
        },
      },
    );
    
    if(confirmError){
      console.log(confirmError)
    }

    console.log(paymentIntent);


  };


  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-block btn-info mt-8"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500 ms-10">{cardError} </p>}
    </>
  );
};

export default CheckoutForm;
