import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const AddEditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({ name: '', email: '', mobile: '', country: '', state: '', district: '' });
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/country');
        console.log('Countries fetched:', response.data); // Debug log
        setCountries(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setError('Error fetching countries');
        setLoading(false);
      }
    };

    const fetchEmployee = async () => {
      if (id) {
        try {
          const response = await axios.get(`https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee/${id}`);
          console.log('Employee fetched:', response.data); // Debug log
          setEmployee(response.data);
        } catch (error) {
          console.error('Error fetching employee details:', error);
        }
      }
    };

    fetchCountries();
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const request = id ? axios.put : axios.post;
    const url = id ? `https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee/${id}` : 'https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee';

    try {
      await request(url, employee);
      navigate('/');
    } catch (error) {
      console.error('Error saving employee:', error);
      alert('Error saving employee');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">{id ? 'Edit Employee' : 'Add Employee'}</h2>
      {loading ? (
        <p>Loading countries...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <form onSubmit={handleSubmit} className="employee-form">
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="form-input"
          />
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="form-input"
          />
          <input
            type="text"
            name="mobile"
            value={employee.mobile}
            onChange={handleChange}
            placeholder="Mobile"
            required
            className="form-input"
          />
          <select
            name="country"
            value={employee.country}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="">Select Country</option>
            {countries.map(country => (
              <option key={country.id} value={country.country}>
                {country.country}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="state"
            value={employee.state}
            onChange={handleChange}
            placeholder="State"
            required
            className="form-input"
          />
          <input
            type="text"
            name="district"
            value={employee.district}
            onChange={handleChange}
            placeholder="District"
            required
            className="form-input"
          />
          <button type="submit">{id ? 'Update' : 'Add'} Employee</button>
        </form>
      )}
    </div>
  );
};

export default AddEditEmployee;
