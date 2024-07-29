import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee/${id}`)
      .then(response => setEmployee(response.data))
      .catch(error => console.error(error));
  }, [id]);

  return employee ? (
    <div>
      <h2>{employee.name}</h2>
      <p>Email: {employee.email}</p>
      <p>Mobile: {employee.mobile}</p>
      <p>Country: {employee.country}</p>
      <p>State: {employee.state}</p>
      <p>District: {employee.district}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  ) : <p>Loading...</p>;
};

export default EmployeeDetails;
