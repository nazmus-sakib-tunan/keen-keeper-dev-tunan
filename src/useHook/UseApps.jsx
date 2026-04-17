import React, { useEffect, useState } from 'react';

const UseApps = () => {


  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/Data.json');
      const data = await res.json();
      // console.log(data, "data from dashboard");
     setTimeout(() => {
      
        setApps(data);
      setLoading(false);
     },2000);
    };
    fetchData();
    
  }, []);



  return { apps, loading };
};

export default UseApps;