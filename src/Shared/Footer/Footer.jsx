import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='p-10 bg-blue-500 mt-6 text-white'>
            <div className='my-container max-w-7xl mx-auto'>
                <div className='grid lg:grid-cols-5 gap-3'>
                    <div className=''>
                        <h2 className='text-2xl font-bold'>Art & craft Institude</h2>
                        <div className='flex items-center gap-2 mt-2'>
                            <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" alt="" className='w-8' />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="" className='w-8' />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="" className='w-8' />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/YouTube_social_red_circle_%282017%29.svg" alt="" className='w-8' />
                        </div>
                    </div>

                    <div>
                        <h2 className='footer-title'>Company</h2>
                        <ul>
                            <li>About Us</li>
                            
                            <li>Latest News</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='footer-title'>Product</h2>
                        <ul>
                            <li>Prototype</li>
                            <li>Plans & Pricing</li>
                            
                            <li>Integrations</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='footer-title'>Support</h2>
                        <ul>
                            <li>Help Desk</li>
                            
                            <li>Become a Partner</li>
                            <li>Developers</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='footer-title'>Contact</h2>
                        <ul className='text-blue-500 font-semibold'>
                            <div className=''>
                                <input type="text" name='email' className='input w-full border border-blue-700 rounded-lg py-3 px-3' placeholder='example@gmail.com' />
                            </div>
                            <div className='mt-3'>
                                <button className="btn foot">subscribe</button>
                            </div>
                        </ul>
                    </div>
                </div>

            <hr className='mt-6 w-full h-0.5 bg-blue-600' />
            <p className=" text-center mt-4 font-serif font-bold text-lg">
                Copyright © 2023 All rights reserved | Art & craft Institude
            </p>
            </div>        
        </div>
    );
};

export default Footer; 