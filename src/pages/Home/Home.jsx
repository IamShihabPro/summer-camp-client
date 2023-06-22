import React from 'react';
import Alumini from '../../components/Alumini/Alumini';
import Banner from '../../components/Banner/Banner';
import WhatNew from '../../components/WhatNew/WhatNew';

import Art from '../../assets/Art.png'
import './Home.css'
import TopInstructor from '../../components/TopInstructor/TopInstructor';

const Home = () => {
    return (
        
        <div>

            <div className="hero min-h-screen bg-blue-500 mb-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Art} className="max-w-sm rounded-lg shadow-2xl mr-4 px-8" />
                <div className='text-white'>
                <h1 className="text-5xl font-bold">Art & craft Institude</h1>
                <p className="py-6 w-96">Fresh line-ups in the institude. Get yourself involved and build your knowledge base. Please be sure to let us know what you love and we’ll keep doing what you love learn.</p>
                <button className="btn ">Enroll Now</button>
                </div>
            </div>
            </div>





        <Banner></Banner>
        <Alumini></Alumini>
        <WhatNew></WhatNew>

        <TopInstructor></TopInstructor>
           
        </div>
    );
};

export default Home;