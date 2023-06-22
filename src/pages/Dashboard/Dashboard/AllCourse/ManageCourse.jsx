import React, { useEffect, useState } from 'react';
import { getAllCourse } from '../../../../api/auth';
import ManageTable from './ManageTable';

const ManageCourse = () => {
  
    const [courses, allCourses] = useState();
    useEffect(() => {
      getAllCourse().then((data) => {
        allCourses(data);
      });
    }, [courses]);
    return (
        <div>
        <div className="overflow-x-auto ms-20 mt-20">
          <table className="table table-zebra ">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Image</th>
                <th>Course Name</th>
                <th>Price</th>
                <th>Action Perform</th>
              </tr>
            </thead>
            {courses?.map((course, index) => (
              <ManageTable
                key={course._id}
                course={course}
                index={index}
              ></ManageTable>
            ))}
          </table>
        </div>
      </div>
    );
};

export default ManageCourse;