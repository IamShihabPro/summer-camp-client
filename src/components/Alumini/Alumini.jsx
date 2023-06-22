import React from 'react';
import Alum1 from '../../assets/Alumini/alum1.jpg'
import Alum3 from '../../assets/Alumini/alum3.jpg'
import Alum4 from '../../assets/Alumini/alum4.jpg'

const Alumini = () => {
    return (
        <div className='flex flex-col justify-center items-center w-11/12 mx-auto'>

            <div className='m-8 flex flex-col justify-center items-center text-3xl'>
                <h2 className='font-bold'>Art & Ceaft</h2>
                <hr className='w-64 border-2 mt-2' />

            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 items-center justify-center gap-5 mx-auto'>
            
            <div className="card card-compact w-96 bg-base-100 shadow-xl" data-aos="zoom-in-right">
            <figure><img src={Alum1} alt="kid" className='w-full h-64 ' /></figure>
           
            </div>
    
            <div className="card card-compact w-96 bg-base-100 shadow-xl" data-aos="zoom-in">
            <figure><img src={Alum3} alt="kid" className='w-full h-64' /></figure>
           
            </div>
    
            <div className="card card-compact w-96 bg-base-100 shadow-xl" data-aos="zoom-in-left">
            <figure><img src={Alum4} alt="kid" className='w-full h-64' /></figure>
            
            </div>            
            
        </div>
        </div>
    );
};

export default Alumini;