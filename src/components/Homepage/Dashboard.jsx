import React, {   } from 'react';
import Card from '../ui/Card';
import { PacmanLoader } from 'react-spinners';
import UseApps from '../../useHook/UseApps';
// import { useLoaderData } from 'react-router';

// const FriendsPromise = fetch('/Data.json').then(res => res.json());

const Dashboard = () => {

  // const friends = use(FriendsPromise);
  // console.log(friends);
  // const data = useLoaderData();
  // console.log(data, "data from homepage")
const { apps, loading } =UseApps();
  return (
    <>
      <div className='flex
      w-10/12 mx-auto justify-around '>
        <div className='text-center'>
          <p className='font-bold text-xl'>{apps.length}</p>
          <p>Total Friends</p>
        </div>
        <div className='text-center'>
          <p className='font-bold text-xl'>0</p>
          <p>On Track</p>
        </div>
        <div className='text-center'>
          <p className='font-bold text-xl'>0</p>
          <p>Need Attention</p>

        </div>
        <div className='text-center'>
          <p className='font-bold text-xl'>0</p>
          <p>Interactions This Month</p>
        </div>
      </div>

      {loading ? (<div className='flex justify-center items-center m-10 '>
        <PacmanLoader color='#244D3F' />
      </div>) : (<div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full mx-auto justify-between  items-center  my-20 py-10 sm:w-10/12 '>
  {apps.map((app, ind) => {
    return (
    <Card app={app} key={ind} />
    );
  })}
</div>
        
   )} 
    </>
  );
};

export default Dashboard;