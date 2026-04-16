import React from 'react';
import { CiInstagram } from 'react-icons/ci';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className='bg-[#244D3F]'>
        
         <div className='w-10/12 mx-auto text-center py-20  '>
        <h1 className='text-7xl font-bold text-white'>KeenKeeper</h1>
        <p className='text-white font-medium'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        <p className='text-white'>Social Links</p>
        <div className='flex gap-2 text-2xl text-center justify-center mt-4 text-white '>
          <CiInstagram />
          <FaFacebook />
          <FaTwitter />

          
        </div>
    </div>
     </div>
      
    </>
  );
};

export default Footer;