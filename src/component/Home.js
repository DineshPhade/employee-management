import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EmployeeList from './EmployeeList';

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
        setError('Error fetching employees');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    try {
      if (searchId) {
        const response = await axios.get(`https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee/${searchId}`);
        setEmployees([response.data]);
      } else {
        const response = await axios.get('https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee');
        setEmployees(response.data);
      }
    } catch (error) {
      console.error('Error searching employees:', error);
      setError('Error searching employees');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Employee Management</h1>
      <input
        type="text"
        value={searchId}
        onChange={e => setSearchId(e.target.value)}
        placeholder="Search by ID"
      />
      <button onClick={handleSearch}>Search</button>
      <Link to="/add">Add New Employee</Link>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <EmployeeList employees={employees} />
    </div>
  );
};

export default Home;
