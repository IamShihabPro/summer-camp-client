import React, { useEffect, useState } from "react";
import { getAllCourse } from "../../../../api/auth";
import AllCourseData from "./AllCourseData";

const AllCourse = () => {
  const [courses, allCourses] = useState();
  useEffect(() => {
    getAllCourse().then((data) => {
      allCourses(data);
    });
  }, [courses]);

  console.log(courses);
  return <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 ms-10 my-10">
    
            {
              courses?.map(course => <AllCourseData key={course._id} course={course}></AllCourseData>)
            }
    
      </div>;
};

export default AllCourse;
