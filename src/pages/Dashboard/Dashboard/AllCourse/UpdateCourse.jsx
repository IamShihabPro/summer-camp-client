import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCourse = () => {
    const course = useLoaderData()

    const navigate = useNavigate()

    const {courseName, instructorNname, price, photoURL, seat, _id} = course

    console.log(courseName, instructorNname, price, photoURL, seat, _id );
    // console.log(course);


    const handleUpdateCourse = event =>{
        event.preventDefault();
        const form = event.target;
        const courseName = form.courseName.value;
        const instructorNname = form.instructorNname.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;
        const seat = form.seat.value;

        const courseData = {
           courseName, instructorNname, price, photoURL, seat
          };
          console.log({courseData});

         fetch(`${import.meta.env.VITE_API_URL}/courses/${_id}`,{
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(courseData)
         })
         .then(res=> res.json())
         .then(data=>{
          console.log(data);
          if(data.modifiedCount > 0){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Course update successfully',
              showConfirmButton: false,
              timer: 1500
            })
            navigate('/dashboard/managecourse')
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
          
          
          <form onSubmit={handleUpdateCourse}>

          <div className="form-control">
            <label className="label">
            <span className="label-text font-bold">Course Name</span>
            </label>
            <input
            type="text"
            name="courseName"
            placeholder="Course Name" defaultValue={courseName}
            className="input input-bordered border-blue-700"/>
          </div>

          <div className="form-control">
            <label className="label">
            <span className="label-text font-bold">Instructor Name</span>
            </label>
            <input
            type="text"
            name="instructorNname"
            placeholder="Instructor Name" defaultValue={instructorNname}
            className="input input-bordered border-blue-700"/>
          </div>
          
          <div className="form-control">
            <label className="label">
            <span className="label-text font-bold">Course Price</span>
            </label>
            <input
            type="number"
            name="price"
            placeholder="Price" defaultValue={price}
            className="input input-bordered border-blue-700"/>
          </div>

          <div className="form-control">
            <label className="label">
            <span className="label-text font-bold">Photo URL</span>
            </label>
            <input
            type="text"
            name="photoURL"
            placeholder="Photo URL" defaultValue={photoURL}
            className="input input-bordered border-blue-700"/>
          </div>

          <div className="form-control">
            <label className="label">
            <span className="label-text font-bold">Available Seat</span>
            </label>
            <input
            type="number"
            name="seat"
            placeholder="Available Seat" defaultValue={seat}
            className="input input-bordered border-blue-700"/>
          </div>

          <div className="mt-4"> 
            <button className="btn btn-active btn-primary w-full hover:bg-green-700">
              Update Course
            </button>
          </div>

        </form>

        </div>
      </section>
    );
};

export default UpdateCourse;