import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllCourse } from '../../api/auth';
import InstructorCard from './InstructorCard';

const TopInstructor = () => {
    const [courses, allCourses] = useState();
    useEffect(() => {
        getAllCourse().then((data) => {
          allCourses(data);
        });
      }, [courses]);
    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='font-bold text-3xl mt-20 mb-10'>Our Top Courses</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>

                {
                courses?.slice(0,6).map(course => <InstructorCard key={course._id} course={course}></InstructorCard>)
                }

                </div>
        </div>
    );
};

export default TopInstructor;