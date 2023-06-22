import React from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import './Common.css'
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const EnrollCourse = () => {
  const course = useLoaderData()
    console.log('course', course);

  return (
    <div className="ms-20 mt-20">
      <h2>Enroll Your Selected Course Here Enroll Your Selected Course Here</h2>
      <Elements stripe={stripePromise} course={course} >
        <CheckoutForm ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default EnrollCourse;
