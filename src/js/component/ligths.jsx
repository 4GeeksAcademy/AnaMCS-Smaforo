import React, { useState } from 'react';

const TrafficLight = () => {
  const [selectedLight, setSelectedLight] = useState(null);

  const handleLightClick = (light) => {
    setSelectedLight(light);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div
        style={{
          width: '100px',
          height: '300px',
          border: '1px solid #000',
          borderRadius: '5px',
          backgroundColor: 'black',
          position: 'relative',
        }}
      >
        <div
          onClick={() => handleLightClick('red')}
          style={{
            width: '80px',
            height: '80px',
            border: '1px solid #000',
            borderRadius: '50%',
            backgroundColor: selectedLight === 'red' ? 'red' : 'darkred',
            position: 'absolute',
            top: '20px',
            left: '10px',
            cursor: 'pointer',
          }}
        ></div>
        <div
          onClick={() => handleLightClick('yellow')}
          style={{
            width: '80px',
            height: '80px',
            border: '1px solid #000',
            borderRadius: '50%',
            backgroundColor: selectedLight === 'yellow' ? 'yellow' : 'darkgoldenrod',
            position: 'absolute',
            top: '120px',
            left: '10px',
            cursor: 'pointer',
          }}
        ></div>
        <div
          onClick={() => handleLightClick('green')}
          style={{
            width: '80px',
            height: '80px',
            border: '1px solid #000',
            borderRadius: '50%',
            backgroundColor: selectedLight === 'green' ? 'green' : 'darkgreen',
            position: 'absolute',
            top: '220px',
            left: '10px',
            cursor: 'pointer',
          }}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
