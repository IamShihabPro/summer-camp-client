import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getBookedCourse } from '../../../../api/auth';
import MyDashTable from './MyDashTable';

const MyDashboard = () => {
    const [bookings, setBookings] = useState([])
    useEffect(()=>{
        getBookedCourse()
        
        .then(data =>{
           setBookings(data);
        })
    },[bookings])

    console.log(bookings);

    return (
        <div>
        <div className="overflow-x-auto ms-20 mt-20">
          <table className="table table-zebra ">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Image</th>
                <th>User</th>
                <th>Course Name</th>
                <th>Price</th>
                <th>Instructor</th>
                <th>Status</th>
                <th>Action </th>
              </tr>
            </thead>
            {

            bookings?.map((booking, index) => (
              <MyDashTable
                key={booking._id}
                booking={booking}
                index={index}
              ></MyDashTable>
            ))
            }
          </table>
        </div>
      </div>
    );
};

export default MyDashboard;