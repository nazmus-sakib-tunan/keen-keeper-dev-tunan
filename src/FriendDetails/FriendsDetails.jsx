import React, { useState } from 'react';
import Friends from './../Friends/Friends';
import { useParams } from 'react-router';
import UseApps from '../useHook/UseApps';
import { IoCall, IoText } from 'react-icons/io5';
import { FaVideo } from 'react-icons/fa';
import { IoIosText } from 'react-icons/io';

const statusColor = {
  "on-track": "text-white bg-green-600",
  "almost due": "text-white bg-yellow-500",
  "overdue": "text-white bg-red-600",
  
};

const FriendsDetails = () => {
  const { id } = useParams();

  const { apps, loading } = UseApps();

  const [installFriend, setInstallFriend] = useState([]);

  const handleCall = () => {
    setInstallFriend([...installFriend, expectedFriend]);
    console.log(installFriend, "install friend");
  };
    if (loading) {
    return <p>Loading...</p>;
  }
  
  const expectedFriend = apps.find(app => String (app.id) === id);

  if (!expectedFriend) {
    return <p>Friend not found</p>;
    }
  return (
    <>
       <div className="bg-gray-100 min-h-screen flex justify-center items-center p-6">
      
      <div className="w-10/12 bg-white rounded-xl shadow-md p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        

        <div className="bg-gray-50 rounded-lg p-5 text-center shadow-sm">
          <img
            src={expectedFriend.picture}
              alt={expectedFriend.name}
            className="w-20 h-20 rounded-full mx-auto"
          />

            <h2 className="mt-3 font-semibold text-lg">{expectedFriend.name}</h2>

          
          <p className={`inline-block px-2 py-1 rounded-full text-sm mt-2 ${statusColor[expectedFriend.status]}`}>
      {expectedFriend.status}
    </p>
          

            <p className="text-xs text-gray-500 mt-2">{ expectedFriend.tags}</p>

          <p className="text-sm italic mt-2 text-gray-600">
              {expectedFriend.bio }
          </p>

            <p className="text-xs text-gray-400 mt-1">{ expectedFriend.email}</p>

          
          <div className="mt-4 space-y-2">
            <button className="w-full bg-gray-100 py-2 rounded text-sm btn">
              Snooze 2 Weeks
            </button>
            <button className="w-full bg-gray-100 py-2 rounded text-sm btn">
              Archive
            </button>
            <button className="w-full bg-red-100 text-red-500 py-2 rounded text-sm btn">
              Delete
            </button>
          </div>
        </div>

        <div className="md:col-span-3 space-y-4">
          
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center shadow-sm">
                <h2 className="text-xl font-bold">{expectedFriend.days_since_contact }</h2>
              <p className="text-xs text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-center shadow-sm">
                <h2 className="text-xl font-bold">{expectedFriend.goal}</h2>
              <p className="text-xs text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-center shadow-sm">
                <h2 className="text-sm font-semibold">{expectedFriend.next_due_date }</h2>
              <p className="text-xs text-gray-500">Next Due</p>
            </div>
          </div>

          
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center">
            <div>
              <h3 className="text-sm font-semibold">Relationship Goal</h3>
              <p className="text-sm text-gray-500">
                Connect every <span className="font-bold">30 days</span>
              </p>
            </div>
            <button className="text-xs bg-gray-200 px-3 py-1 rounded btn">
              Edit
            </button>
          </div>

    
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-semibold mb-3">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-3">
              <button className="bg-gray-200 py-2 rounded btn" onClick={handleCall}> <IoCall />Call</button>
              <button className="bg-gray-200 py-3 rounded btn"> <IoIosText />Text</button>
              <button className="bg-gray-200 py-3 rounded btn" ><FaVideo /> Video</button>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default FriendsDetails;

