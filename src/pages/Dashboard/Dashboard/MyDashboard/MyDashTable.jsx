import React from 'react';
import Swal from 'sweetalert2';

import { MdDelete } from 'react-icons/md';

const MyDashTable = ({booking, index}) => {



    const handleMakeConfirm = user =>{
        fetch(`${import.meta.env.VITE_API_URL}/bookings/confirm/${user._id}`,{
            method: 'PATCH'
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);

            if(data.modifiedCount){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.user.displayName} is confirm now`,
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

            fetch(`${import.meta.env.VITE_API_URL}/bookings/${_id}`,{
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
          
        <tbody>
        <tr>
            
            <td>{index+1}</td>
          
            <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                <div className="mask rounded w-12 h-12">
                    <img src={booking.cart.photoURL} alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
                <div>
                </div>
            </div>
            </td>

            <td>{booking.user.displayName}</td>
            
            <td>
            {booking.cart.courseName}
            <br/>
            </td>
            <td>${booking.cart.price}</td>
            <td>{booking.cart.instructorNname}</td>
            <td>
            {booking.status === 'Confirm' ? 'Confirm' : <button onClick={()=> handleMakeConfirm(booking)} className='btn btn-ghost btn-xs text-green-500'>Make Confirm</button> }
            </td>
            <td>
            <button onClick={()=> handleDelete(booking._id)}  className="btn btn-ghost btn-lg text-red-500"> <MdDelete></MdDelete> </button>
            </td>
            <th>
            {/* <Link to={`/dashboard/updatecourse/${booking._id}`}><button className="btn btn-ghost btn-lg text-green-500"> <FaEdit></FaEdit> </button></Link> */}
            {/* <button onClick={()=> handleDelete(course._id)} className="btn btn-ghost btn-lg text-red-500"> <MdDelete></MdDelete> </button> */}
            </th>
        </tr>


        </tbody>

    );
};

export default MyDashTable;