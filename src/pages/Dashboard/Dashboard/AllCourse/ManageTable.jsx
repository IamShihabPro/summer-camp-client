import React from 'react';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageTable = ({course, index}) => {
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

            fetch(`${import.meta.env.VITE_API_URL}/courses/${_id}`,{
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
                    <img src={course.photoURL} alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
                <div>
                </div>
            </div>
            </td>
            <td>
            {course.courseName}
            <br/>
            </td>
            <td>{course.price}</td>
            <th>
            <Link to={`/dashboard/updatecourse/${course._id}`}><button className="btn btn-ghost btn-lg text-green-500"> <FaEdit></FaEdit> </button></Link>
            <button onClick={()=> handleDelete(course._id)} className="btn btn-ghost btn-lg text-red-500"> <MdDelete></MdDelete> </button>
            </th>
        </tr>


        </tbody>

    );
};

export default ManageTable;