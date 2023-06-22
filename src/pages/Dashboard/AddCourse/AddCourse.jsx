import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProvider';

const AddCourse = () => {

  const {user} = useContext(AuthContext)
  console.log(user.email);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const courseName = form.courseName.value;
        const instructorNname = form.instructorNname.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;
        const seat = form.seat.value;
        const email = form.email.value;

        const courseData = {
           courseName, instructorNname, price, photoURL, seat, email
          };
          console.log({courseData});

         fetch(`${import.meta.env.VITE_API_URL}/courses`,{
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(courseData)
         })
         .then(res=> res.json())
         .then(data=>{
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Course added successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
         })
    }


    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image" />
        </div>
        <div className="md:w-1/3 max-w-sm">
          
          <form onSubmit={handleSubmit}>

          <div className="form-control">
            <label className="label">
            <span className="label-text font-bold">Course Name</span>
            </label>
            <input
            type="text"
            name="courseName"
            placeholder="Course Name"
            className="input input-bordered border-blue-700"/>
          </div>

          <div className="form-control">
            <label className="label">
            <span className="label-text font-bold">Instructor Name</span>
            </label>
            <input
            type="text"
            name="instructorNname"
            placeholder="Instructor Name"
            className="input input-bordered border-blue-700"/>
          </div>
          
          <div className="form-control">
            <label className="label">
            <span className="label-text font-bold">Instructor Email</span>
            </label>
            <input
            type="email"
            name="email"
            placeholder="Instructor Name" defaultValue={user.email}
            className="input input-bordered border-blue-700"/>
          </div>
          
          <div className="form-control">
            <label className="label">
            <span className="label-text font-bold">Course Price</span>
            </label>
            <input
            type="number"
            name="price"
            placeholder="Price"
            className="input input-bordered border-blue-700"/>
          </div>

          <div className="form-control">
            <label className="label">
            <span className="label-text font-bold">Photo URL</span>
            </label>
            <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            className="input input-bordered border-blue-700"/>
          </div>

          <div className="form-control">
            <label className="label">
            <span className="label-text font-bold">Available Seat</span>
            </label>
            <input
            type="number"
            name="seat"
            placeholder="Available Seat"
            className="input input-bordered border-blue-700"/>
          </div>

          <div className="mt-4">
            <button className="btn btn-active btn-primary w-full hover:bg-green-700">
              Add Course
            </button>
          </div>

        </form>

        </div>
      </section>
    );
};

export default AddCourse;