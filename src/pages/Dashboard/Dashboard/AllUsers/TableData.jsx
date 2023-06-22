import React from 'react';

import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';


const TableData = ({dashUser, index}) => {

    const handleMakeAdmin = user =>{
        fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);

            if(data.modifiedCount){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleMakeInstructor = (user) =>{
        fetch(`${import.meta.env.VITE_API_URL}/users/instructor/${user._id}`,{
            method: 'PATCH'
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);

            if(data.modifiedCount){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is instructor now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }


    const handleDelete = _id =>{
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )

            fetch(`${import.meta.env.VITE_API_URL}/users/${_id}`,{
                method: 'DELETE',
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data);

                if(data.deletedCount > 0){

                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })

            }
          })
    }



    return (
        <>

            <tbody>
            <tr>
               
                <td>{index+1}</td>
               
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask rounded w-12 h-12">
                        <img src={dashUser.photoURL} alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    </div>
                </div>
                </td>
                <td>
                {dashUser.name}
                <br/>
                </td>
                <td>{dashUser.email}</td>
                
                <th>
                    {dashUser.role === 'Admin' ? 'Admin' : <button onClick={()=> handleMakeAdmin(dashUser)} className='btn btn-ghost btn-xs text-green-500'>Make Admin</button> }
                    {dashUser.role === 'Instructor' ? 'Instructor' : <button onClick={()=> handleMakeInstructor(dashUser)} className='btn btn-ghost btn-xs text-green-500'>Make Instructor</button> }
                    
                </th>


                
                <th>
                <button onClick={()=> handleDelete(dashUser._id)}  className="btn btn-ghost btn-lg text-red-500"> <MdDelete></MdDelete> </button>
                </th>
            </tr>


            </tbody>

            
        </>
    );
};

export default TableData;

