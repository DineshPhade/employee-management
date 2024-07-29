import React from 'react';
import { Link } from 'react-router-dom';


const EmployeeList = ({ employees }) => {
  return (
    <div className="employee-list-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th> {/* Added ID column */}
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Country</th>
            <th>State</th>
            <th>District</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td> {/* Display ID */}
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.mobile}</td>
              <td>{employee.country}</td>
              <td>{employee.state}</td>
              <td>{employee.district}</td>
              <td>
                <Link to={`/employee/${employee.id}`}>View</Link>
                <Link to={`/edit/${employee.id}`}>Edit</Link>
                <Link to={`/delete/${employee.id}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
