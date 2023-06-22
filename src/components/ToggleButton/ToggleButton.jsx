import React from "react";
import { FiSettings } from 'react-icons/fi';
import { Link } from "react-router-dom";

const ToggleButton = () => {
  return (
    <details className="dropdown mb-20">
    <summary className="m-1 btn"> <span> <FiSettings></FiSettings> </span> manage</summary>
    <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
      <li><Link to='/dashboard/managecourse'>Manage Course</Link></li>
      {/* <li><Link to='/dashboard'>Item 2</Link></li> */}
    </ul>
  </details>
  );
};

export default ToggleButton;
