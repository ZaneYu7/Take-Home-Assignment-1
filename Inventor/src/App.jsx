import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import FruitsList from './FruitsList'
import SpicesList from './SpicesList'
import VegetablesList from './VegetablesList'

function App() {
  const getActiveClass = ({ isActive }) => 
    isActive ? 'p-2 bg-green-400 rounded' : 'p-2 bg-gray-200 rounded';

  return (
    <Router>
      <div className="flex flex-col items-center">
        <header className="w-full bg-purple-200 text-center py-4">
          <h1 className="text-3xl font-bold">Inventory</h1>
        </header>
        
        <div className="space-x-2 bg-gray-50 border-gray-100">
          <nav className="flex space-x-4 my-4">
            <NavLink to="/vegetables" className={getActiveClass}>(1) Vegetables</NavLink>
            <NavLink to="/spices" className={getActiveClass}>(2) Spices</NavLink>
            <NavLink to="/fruits" className={getActiveClass}>(3) Fruits</NavLink>
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