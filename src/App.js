import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import EmployeeDetails from './component/EmployeeDetails';
import AddEditEmployee from './component/AddEditEmployee';
import DeleteConfirmation from './component/DeleteConfirmation';
import './style.css';
import './Home.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee/:id" element={<EmployeeDetails />} />
        <Route path="/add" element={<AddEditEmployee />} />
        <Route path="/edit/:id" element={<AddEditEmployee />} />
        <Route path="/delete/:id" element={<DeleteConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
