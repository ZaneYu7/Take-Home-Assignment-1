import React from 'react';
import { useState } from 'react';

const SpicesList = () => {
  const [selected, setSelected] = useState([]);

  const spices = ['Salt', 'Pepper', 'Chilli', 'Herbs', 'Curry'];
  
  const toggleSelect = (spice) => {
    if (selected.includes(spice)) {
      setSelected(selected.filter(item => item !== spice));
    } else {
      setSelected([...selected, spice]);
    }
  };
  
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">List ({spices.length})</h2>
      <ul className="space-y-2">
        {spices.map(spice => (
          <li
            key={spice}
            onClick={() => toggleSelect(spice)}
            className={`p-2 border rounded cursor-pointer ${selected.includes(spice) ? 'bg-green-500' : 'bg-gray-300'}`}
          >
            {spice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpicesList;