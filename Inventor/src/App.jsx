import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import FruitsList from './FruitsList'
import SpicesList from './SpicesList'
import VegetablesList from './VegetablesList'

function App() {
  const getActiveClass = ({ isActive }) => 
    isActive ? 'bg-green-400 rounded' : 'bg-gray-200 rounded';

  return (
    <Router>
      <div className="flex flex-col items-center">
        <header className="mt-5 w-full max-w-lg bg-purple-200 text-center py-4">
          <h1 className="text-3xl font-bold">Inventory</h1>
        </header>
        
        <div className="w-full max-w-lg p-4 border border-gray-200 mt-5">
          <nav className="flex space-x-2 my-4">
            <NavLink to="/vegetables" className={({ isActive }) =>
                `${getActiveClass({ isActive })} flex-1 text-center p-2`
              }>(1) Vegetables</NavLink>
            <NavLink to="/spices" className={({ isActive }) =>
                `${getActiveClass({ isActive })} flex-1 text-center p-2`
              }>(2) Spices</NavLink>
            <NavLink to="/fruits" className={({ isActive }) =>
                `${getActiveClass({ isActive })} flex-1 text-center p-2`
              }>(3) Fruits</NavLink>
          </nav>
        </div>
        
        <main className="w-full flex justify-center">
          <Routes>
            <Route path="/vegetables" element={<VegetablesList />} />
            <Route path="/spices" element={<SpicesList />} />
            <Route path="/fruits" element={<FruitsList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;