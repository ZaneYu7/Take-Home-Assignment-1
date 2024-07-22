import React from "react";
import { useState } from "react";

const VegetablesList = () => {
  const [selected, setSelected] = useState([]);

  const vegetables = ['Carrot', 'Cucumber'];
  
  const toggleSelect = (vegetable) => {
    if (selected.includes(vegetable)) {
      setSelected(selected.filter(item => item !== vegetable));
    } else {
      setSelected([...selected, vegetable]);
    }
  };
  
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">List ({vegetables.length})</h2>
      <ul className="space-y-2">
        {vegetables.map(vegetable => (
          <li
            key={vegetable}
            onClick={() => toggleSelect(vegetable)}
            className={`p-2 border rounded cursor-pointer ${selected.includes(vegetable) ? 'bg-green-500' : 'bg-gray-300'}`}
          >
            {vegetable}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VegetablesList;