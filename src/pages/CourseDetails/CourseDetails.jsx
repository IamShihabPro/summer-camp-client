import React from 'react';
import Container from '../../Shared/Container/Container';

const CourseDetails = () => {
    return (
       <Container>
        <div className='mt-8 flex justify-center items-center'>
            <h2 className='font-bold text-3xl'>We are providing these courses</h2>
        </div>
        <div className='grid lg:grid-cols-2 md:grid sm:grid-cols-1 mx-auto items-center mt-10'>

            <div className="card w-96 bg-base-100 shadow-xl drop-shadow-lg ms-14">
            <figure><img src="https://img.freepik.com/free-photo/illustrators-tools-arrangement-still-life_23-2150163131.jpg?w=1060&t=st=1686262304~exp=1686262904~hmac=ad8fc5093082ad30a02bdf1ecf92f60ffe8b559de521b0b99be7ea59a2182739" className='w-96' alt="Art" /></figure>
            <div className="card-body">
                <h2 className="card-title">Art!</h2>
                <p> Training program for professionals in the architectural paint course.</p>
                <div className="card-actions justify-center">
                <button className="btn btn-outline btn-info">Details</button>
                <button className="btn btn-outline btn-primary">Enroll Now</button>
                </div>
            </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl drop-shadow-lg  ms-14">
            <figure><img src="https://img.freepik.com/free-photo/top-view-origami-craft-paint-tube-paintbrush-straw-colored-paper_23-2148188422.jpg?w=1060&t=st=1686262392~exp=1686262992~hmac=858087cc5096df14090bfbbd1a6f17c71e21be594ba8f9ba9d1800fdc64a9c5b" className='w-96' alt="Craft" /></figure>
            <div className="card-body">
                <h2 className="card-title">Craft!</h2>
                <p>Training program for professionals in the fashion craft course.</p>
                <div className="card-actions justify-center">
                <button className="btn btn-outline btn-info">Details</button>
                <button className="btn btn-outline btn-primary">Enroll Now</button>
                </div>
            </div>
            </div>

        </div>
       </Container>
    );
};

export default CourseDetails;