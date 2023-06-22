import React from 'react';

const InstructorCard = ({course}) => {
    return (
        <div className="card w-72 bg-base-100 drop-shadow-lg">
      <figure>
        <img className="w-full h-64" src={course.photoURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{course.courseName}</h2>

        <p>Price: {course.price}</p>
        <div className="card-actions justify-center">
          

       
        </div>
      </div>
    </div>
    );
};

export default InstructorCard;