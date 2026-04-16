import React, { use } from 'react';

const FriendsPromise = fetch('/Data.json').then(res => res.json());

const Dashboard = () => {

  const friends = use(FriendsPromise);
 console.log(friends);
  return (
    <>
      <div className='flex
      w-10/12 mx-auto justify-around '>
        <div className='text-center'>
          <p>0</p>
          <p>Total Friends</p>
        </div>
        <div className='text-center'>
          <p className='font-bold text-xl'>0</p>
          <p>On Track</p>
        </div>
        <div className='text-center'>
          <p>0</p>
          <p>Need Attention</p>

        </div>
        <div className='text-center'>
          <p>0</p>
          <p>Interactions This Month</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;