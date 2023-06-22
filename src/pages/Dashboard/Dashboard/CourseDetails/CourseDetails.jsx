import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData()
    console.log('course', course);
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl ms-2 lg:mt-20 mb-5 me-6 md:mt-20 mt-10">
        <figure><img className='w-96 h-72' src={course.photoURL} alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title">Course Name: {course.courseName}</h2>
            <p>Course Instructor: {course.instructorNname}</p>
            <p>Course Price: ${course.price}</p>
            <p>Available Seat: {course.seat}</p>
            <div className="card-actions justify-end mt-10">
            <button className="btn btn-outline btn-accent">Enroll Now</button>
            </div>
        </div>
        </div>
    );
};

export default CourseDetails;