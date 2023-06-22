import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../../../api/auth";
import TableData from "./TableData";

const AllUsers = () => {
  const [dasUsers, serDasUsers] = useState();
  useEffect(() => {
    getAllUsers().then((data) => {
      serDasUsers(data);
    });
  }, [dasUsers]);

  // console.log(dasUsers);

  return (
    <div>
      <div className="overflow-x-auto ms-20 mt-20">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Person</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          {dasUsers?.map((dashUser, index) => (
            <TableData
              key={dashUser._id}
              dashUser={dashUser}
              index={index}
            ></TableData>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
