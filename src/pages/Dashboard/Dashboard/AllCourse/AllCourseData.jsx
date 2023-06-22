import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../provider/AuthProvider";

const AllCourseData = ({ course }) => {
    const {user} = useContext(AuthContext)
  const handleCart = (cart) => {
    console.log(cart);

    const booked = {
        cart, user
    }

    fetch(`${import.meta.env.VITE_API_URL}/bookings`,{
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(booked)
         })
         .then(res=> res.json())
         .then(data=>{
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Add to cart successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
         })

  };
  return (
    <div className="card w-72 bg-base-100 drop-shadow-lg">
      <figure>
        <img className="w-full h-64" src={course.photoURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{course.courseName}</h2>

        <p>Price: {course.price}</p>
        <div className="card-actions justify-center">
          <Link to={`/dashboard/enroll/${course._id}`}>
            <button className="btn btn-outline btn-accent">Enroll Now</button>{" "}
          </Link>
          <Link to={`/dashboard/coursedetails/${course._id}`}>
            <button className="btn btn-outline btn-accent">Details</button>
          </Link>

        <Link>
            <button
              onClick={() => handleCart(course)}
              className="btn btn-outline btn-accent"
            >
              Add Cart

            </button>
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default AllCourseData;
