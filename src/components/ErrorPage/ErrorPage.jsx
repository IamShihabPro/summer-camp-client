import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

import Error from '../../assets/Error.jpg'

const ErrorPage = () => {
  const { error } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-white text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8 relative'>
        <img src={Error} className='w-96 mb-96 mt-24' alt="" />
        <div className='max-w-md text-center absolute mt-12'>
          <p className='text-2xl font-semibold md:text-3xl mb-8 mt-28'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='btn btn-outline btn-primary px-8 py-3 font-bold font-serif'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage;