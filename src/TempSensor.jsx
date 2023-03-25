
import React,{ useState, useEffect } from 'react';
import Temperature from './Temperature';
import axios from 'axios';


const TempSensor = () => {
  const [temperature, setTemperature] = React.useState(0);

  useEffect(() => {
    const fetchData = async () => {
      axios.get('http://192.168.0.10:3000/getLastData').then((response) => {
        setTemperature(response.data);
      });
    }

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    },5000);

    return () => clearInterval(interval);


  }, [])

  return (
    <div>
      <Temperature temperature={temperature.temp} />
    </div>
  );
}

export default TempSensor;
