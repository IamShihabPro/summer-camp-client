import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { saveUser } from '../../api/auth';
import { FaEye , FaEyeSlash} from 'react-icons/fa';

const SignUp = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const { register, handleSubmit, reset ,watch, formState: { errors } } = useForm();
    const [accept, setAccept] = useState(false)

    const[type, setType] = useState('password')
    // const[cPass, setCPass] = useState('password')


    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(res =>{
            const loggedUser = res.user
            // console.log(loggedUser);

            updateUserProfile(data.name, data.photoURL)
            .then(()=>{
                console.log('user profile update');
                // reset()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                saveUser(res.user)
                navigate('/')
            })
        })
    };

    const handleAccept = event =>{
        setAccept(event.target.checked)
    }

    return (
        <div className='py-10 '>        
        
        <div className='w-96 bg-white mx-auto rounded-xl drop-shadow-xl overflow-hidden font-serif'>

            <div className=' grid'>
                <h1 className='text-center mt-6 font-bold text-3xl'>Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full px-10 py-5 mx-auto' >

                            <div className=''>
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" {...register("name",  { required: true })} name='name' className='input w-full border border-blue-700 rounded-lg py-3 px-3' placeholder='enter name'  />
                                {errors.name && <span className='text-red-600'>Name is required</span>}
                            </div>

                            <div className='mt-2'>
                                <label className="label">
                                    <span className="label-text font-bold">Email Address</span>
                                </label>
                                <input type="text" {...register("email", { required: true })}  name='email' className='input w-full border border-blue-700 rounded-lg py-3 px-3' placeholder='example@gmail.com'  />
                                {errors.email && <span className='text-red-600'>Email is required</span>}
                            </div>

                            <div className='mt-2'>
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type={type}  {...register("password", { required: true, minLength: 8, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} name='password' className=' input w-full border border-blue-700  py-3 px-3' placeholder='type password'  />
                                {type === 'password'? <span onClick={()=> setType("text")}> <FaEyeSlash></FaEyeSlash> </span> : <span onClick={()=> setType("password")}> <FaEye></FaEye> </span> }
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 8 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            </div>

                          {/* confirm password */}

                          <div className='mt-2'>
                                <label className="label">
                                    <span className="label-text font-bold">Confirm Password</span>
                                </label>
                                <input type='password'  {...register("confirmPassword", {validate: data=> {
                                    if(watch('password')!== data){
                                        return 'password not match'
                                    }
                                }})} name='confirmPassword' className=' input w-full border border-blue-700  py-3 px-3' placeholder='confirm password'  />
                                <p className='text-red-600'>{errors.confirmPassword?.message}</p>
                                {/* {type === 'password'? <span onClick={()=> setCPass("text")}> <FaEyeSlash></FaEyeSlash> </span> : <span onClick={()=> setCPass("password")}> <FaEye></FaEye> </span> } */}
                               
                            </div>






                            <div className='mt-2'>
                                <label className="label">
                                    <span className="label-text font-bold">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} name='photoURL' className='input w-full border border-blue-700 rounded-lg py-3 px-3' placeholder='photo url'  />
                                {errors.photoURL && <span className='text-red-600'>Photo URL is required</span>}
                            </div>

                           <div className='mt-4 ml-1 flex items-center'>
                                <input onClick={handleAccept} type="checkbox" name='check'  className="checkbox w-4 h-4 bg-blue-500" />
                                <p className='ml-4 text-blue-500'>Accept Terms and Conditions</p>
                           </div>
                                                            
                            <div className='mt-4 mb-4'>
                                <input type="submit" className="btn bg-blue-500 clr text-white w-full" disabled={!accept} value='Sign up' />
                            </div>
                            <div className='mb-4' >
                                <h1 className='ms-4'>Already have an account? <span className='text-blue-500'> <Link to='/login'>Login Now</Link> </span> </h1>
                            </div>

                    </form>
            </div>
        </div>

    </div>
    );
};

export default SignUp;