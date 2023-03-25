import React, { useState, useEffect } from 'react';
import GraphTemp from './GraphTemp';
import axios from 'axios';

const GraphTempSensor = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios.get('http://192.168.0.10:3000/getAllData').then((response) => {
        setData(response.data);
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
      <GraphTemp arrayData={data} />
    </div>
  );
};

export default GraphTempSensor;
