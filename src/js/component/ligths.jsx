import React, { useState } from 'react';

const TrafficLight = () => {
  const [selectedLight, setSelectedLight] = useState(null);
  const [extraColor, setExtraColor] = useState(false);

  const handleLightClick = (light) => {
    setSelectedLight(light);
  };

  const handleAddPurpleClick = () => {
    setExtraColor(true);
  };

  const renderPurpleLight = () => {
    if (extraColor) {
      return (
        <div
          style={{
            width: '80px',
            height: '80px',
            border: '1px solid #000',
            borderRadius: '50%',
            backgroundColor: 'purple',
            position: 'absolute',
            top: '320px',
            left: '10px',
          }}
        ></div>
      );
    }
    return null;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div
        style={{
          width: '100px',
          height: '400px',
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
        {renderPurpleLight()}
      </div>

      <button onClick={handleAddPurpleClick} style={{ marginTop: '10px' }}>
        Agregar Púrpura
      </button>
    </div>
  );
};

export default TrafficLight;
