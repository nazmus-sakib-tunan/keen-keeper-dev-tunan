import React from 'react';
import { Link } from 'react-router';

const statusColor = {
  "on-track": "text-white bg-green-600",
  "almost due": "text-white bg-yellow-500",
    "overdue": "text-white bg-red-600",
  
};

const Card = ({app}) => {
  return (
    <Link to ={`/${app.id}`} className='w-full h-full'>
      
      <div  className='w-75 h-60 shadow flex justify-center  p-5 text-center'>
        <div>
          <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={app.picture} />
  </div>
</div>
          <h2 className='font-bold text-xl mt-2'>{app.name}</h2>
          <p className='text-green-500 bg-green-100 px-3 rounded-full mt-2 '>{app.tags }</p>
          <p className={`inline-block px-2 py-1 rounded-full text-sm mt-2 ${statusColor[app.status]}`}>
      {app.status}
    </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;