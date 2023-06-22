import React from 'react';

const WhatNew = () => {
    return (
        <div className="hero mt-20 mb-10 py-10 mx-10  ">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full">
                <div className='w-8/12 mt-4 ms-10' data-aos="fade-right">
                    <h1 className="text-5xl font-bold">What’s new?</h1>
                    <p className="py-6">
                        Fresh line-ups in the institude. Get yourself involved and build your knowledge base. Please be sure to let us know what you love and we’ll keep doing what you love learn.</p>
                    <button className="btn btn-primary mb-3">Enroll Now</button>
                </div>
                                                      
                <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-x-44 gap-y-8 mt-3' data-aos="fade-left">
                    <img src="https://cdn.shopify.com/s/files/1/1168/2276/files/Stacy-Bettencourt-Strictlypaper_large.jpg?v=1553180670" className="max-w-sm w-64 flex justify-center items-center rounded-lg shadow-2xl" />
                    <img src="https://cdn.shopify.com/s/files/1/1168/2276/products/Giraffe_Yellow_Context_10_x_10_1500x1500.jpg?v=1507649674" className="max-w-sm w-80 flex justify-center items-center rounded-lg shadow-2xl" />
                </div>


            </div>
        </div>
    );
};

export default WhatNew;