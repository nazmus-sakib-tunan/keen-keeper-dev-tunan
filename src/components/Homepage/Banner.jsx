import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import Dashboard from './Dashboard';

const Banner = () => {
  return (
    <>
      <div className='w-10/12 mx-auto text-center py-20'> 
        <h1 className='text-5xl font-bold'>
        Friends to keep close in your life
        </h1>
        <p className='pt-4 text-[#64748B]'>
          Your personal shelf of meaningful connections. Browse, tend, and nurture <br/> the
relationships that matter most.
        </p>
        <button className='mt-10 btn bg-[#244D3F] text-white'><IoMdAdd /> Add Friend</button>
      </div>
      <Dashboard/>
    </>
  );
};

export default Banner;