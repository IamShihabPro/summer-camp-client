import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import Logo from '../../assets/google-signin-button.png'
import { getAuth, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    
    const auth = getAuth()
    const {signIn, googleProvider} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        // console.log(email, password);

        signIn(email, password)
        .then(res =>{
            const loggedUser = res.user

            console.log(loggedUser);
            Swal.fire({
                title: 'User Login Successfully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              navigate(from, {replace: true})

            // form.reset()
           
        })
        .catch(err =>{

            console.log(err);
        })
    }

    const  handleGoggleSignIn = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(res =>{
            const user = res.user
            console.log(user);
            navigate(from, {replace: true} )
        })
        .catch(err =>{
            console.log('error', err.message);
        })
    }

    return (
        <div className='p-10 '>
                
            <div className='w-96 bg-white mx-auto rounded-xl drop-shadow-xl overflow-hidden font-serif'>

                <div className=' grid'>
                    <h1 className='text-center mt-6 font-bold text-3xl'>Login</h1>
                        <form onSubmit={handleLogin} className='w-full px-10 py-5 mx-auto' >

                                <div className=''>
                                    <label className="label">
                                        <span className="label-text font-bold">Email Address</span>
                                    </label>
                                    <input type="text" name='email' className='input w-full border border-blue-700 rounded-lg py-3 px-3' placeholder='example@gmail.com' />
                                </div>

                                <div className='mt-3'>
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input type="password" name='password' className='input w-full border border-blue-700  py-3 px-3' placeholder='type password' />
                                </div>

                               <div className='mt-3 ml-1 flex items-center'>
                                    <input type="checkbox"  className="checkbox w-4 h-4" />
                                    <p className='ml-2 text-blue-600'>Remember me</p>
                                    <Link className='ml-auto text-gray-500'>Forgot password?</Link>
                               </div>
                                                                
                                <div className='mt-3'>
                                     <button className="btn clr bg-blue-500 text-white w-full">Login</button>
                                </div>

                                <div className='mt-4 mx-auto flex justify-center items-center gap-2'>
                                    <hr className='w-20 h-1 bg-sky-600' />
                                   <h1>OR</h1>
                                   <hr className='w-20 h-1 bg-sky-600' />
                                </div>

                                <div className='mt-4 flex justify-center items-center'>
                                   <button onClick={handleGoggleSignIn}  > <img src={Logo} className='w-72 cursor-pointer' alt="" /></button>
                                </div>

                                <div className='mb-3'>
                                    <h1 className='ms-4'>Don't have an account? <span className='text-blue-600'> <Link to='/signup'>Register Now</Link> </span> </h1>
                                </div>
                        </form>
                </div>
            </div>

        </div>
    );
};

export default Login;