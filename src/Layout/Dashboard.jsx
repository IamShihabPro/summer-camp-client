import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaAddressBook, FaCreditCard, FaHome, FaUsers, FaLaptop } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import Avatar from '../components/Dashboard/Avatar';
import ToggleButton from '../components/ToggleButton/ToggleButton';

const Dashboard = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>

<div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex">
    {/* Navbar */}
    <div className="w-3/12 navbar flex flex-col bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      {/* <div className="flex-1 px-2 mx-2">Navbar Title</div> */}
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-vertical">

          {/* Navbar menu content here */}
          {
            user && <>
            <li className='items-center mt-1'><Avatar></Avatar></li>
            <li className='items-center mt-1'>{user.displayName}</li>
            <li className='items-center mt-1'>{user.email}</li>
            </>
          }
          
          <div className="divider"></div> 
          <li><Link > <FaLaptop></FaLaptop> My Courses </Link></li>
          {/* <li><Link to='/dashboard/mydash'> <FaHome></FaHome> User Home</Link></li> */}
          <li><Link > <FaCreditCard></FaCreditCard> Payment </Link></li>
          <li><Link to='/dashboard/allusers'> <FaUsers></FaUsers> All Users </Link></li>
          <li><Link to='/dashboard/addcourse'> <FaAddressBook></FaAddressBook> Add Course</Link></li>
          <li><Link to='/dashboard/allcourse'> <FaAddressBook></FaAddressBook> All Course</Link></li>
          <div className="divider"></div> 

          <ToggleButton></ToggleButton>
          <div className="divider"></div> 

          <li><Link to='/'> <FaHome></FaHome> Home</Link></li>
        </ul>
      </div>
    </div>
    {/* Page content here */}
    <div className='ms-4'>
    <Outlet></Outlet>
    </div>

    {/* Content */}


  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200">
      {/* Sidebar content here */}
          {
            user && <>
            <li className='items-center mt-1'><Avatar></Avatar></li>
            <li className='items-center mt-1'>{user.displayName}</li>
            <li className='items-center mt-1'>{user.email}</li>
            </>
          }
          <div className="divider"></div> 
          <li><Link > <FaLaptop></FaLaptop> My Courses </Link></li>
          {/* <li><Link to='/dashboard/mydash'> <FaHome></FaHome> User Home</Link></li> */}
          <li><Link > <FaCreditCard></FaCreditCard> Payment </Link></li>
          <li><Link to='/dashboard/allusers'> <FaUsers></FaUsers> All Users </Link></li>
          <li><Link to='/dashboard/addcourse'> <FaAddressBook></FaAddressBook> Add Course</Link></li>
          <li><Link to='/dashboard/allcourse'> <FaAddressBook></FaAddressBook> All Course</Link></li>
          <div className="divider"></div> 

          <ToggleButton></ToggleButton>
          <div className="divider"></div> 

          <li><Link to='/'> <FaHome></FaHome> Home</Link></li>
      
    </ul>
    
  </div>
</div>
      
    </div>
  );
};

export default Dashboard;