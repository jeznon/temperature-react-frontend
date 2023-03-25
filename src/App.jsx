import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import TempSensor from './TempSensor';
import HumiditySensor from './HumiditySensor';
import GraphTempSensor from './GraphTempSensor';
import GraphHumSensor from './GraphHumSensor';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TempSensor />} />
        <Route path="/humidity" element={<HumiditySensor />} />
        <Route path="/temperature" element={<TempSensor />} />
        <Route path="/graphtemperature" element={<GraphTempSensor />} />
        <Route path="/graphhumidity" element={<GraphHumSensor />} />
      </Routes>
    </Router>
  );
};

export default App;
