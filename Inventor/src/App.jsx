import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import FruitsList from './FruitsList'
import SpicesList from './SpicesList'
import VegetablesList from './VegetablesList'

function App() {
  return (
    <Router>
      <div>
        <h1 className="text-3xl font-bold">Inventor</h1>
        <nav className="flex space-x-4">
          <NavLink to="/vegetables" className="p-2 bg-gray-200 rounded">(1) Vegetables</NavLink>
          <NavLink to="/spices" className="p-2 bg-gray-200 rounded">(1) Spices</NavLink>
          <NavLink to="/fruits" className="p-2 bg-gray-200 rounded">(1) Fruits</NavLink>
        </nav>
        <Routes>
          <Route path="/vegetables" element={VegetablesList}/>
          <Route path="/spices" element={SpicesList}/>
          <Route path="/fruits" element={FruitsList}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;