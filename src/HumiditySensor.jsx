import React, { useState, useEffect } from 'react';
import Humidity from './Humidity';
import axios from 'axios';

const HumiditySensor = () => {
  const [temperature, setTemperature] = React.useState(0);

  useEffect(() => {
    const fetchData = async () => {
      axios.get('http://192.168.0.10:3000/getLastData').then((response) => {
        setTemperature(response.data);
      });
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Humidity humidity={temperature.hum} />
    </div>
  );
};

export default HumiditySensor;
