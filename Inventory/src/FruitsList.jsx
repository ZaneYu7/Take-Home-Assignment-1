import React from 'react';
import { useState } from 'react';

const FruitsList = () => {
  const [selected, setSelected] = useState([]);

  const fruits = ['Apple', 'Banana', 'Pear', 'Watermelon', 'Grape', 'Strawberry', 'Mango', 'Blackberry'];
  
  const toggleSelect = (fruit) => {
    if (selected.includes(fruit)) {
      setSelected(selected.filter(item => item !== fruit));
    } else {
      setSelected([...selected, fruit]);
    }
  };
  
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">List ({fruits.length})</h2>
      <ul className="space-y-2">
        {fruits.map(fruit => (
          <li
            key={fruit}
            onClick={() => toggleSelect(fruit)}
            className={`p-2 border rounded cursor-pointer ${selected.includes(fruit) ? 'bg-green-500' : 'bg-gray-300'}`}
          >
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitsList;