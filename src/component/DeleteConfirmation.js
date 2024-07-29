import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteConfirmation = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`https://669b3f09276e45187d34eb4e.mockapi.io/api/v1/employee/${id}`)
      .then(() => navigate('/'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Are you sure you want to delete this employee?</h2>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={() => navigate(-1)}>No</button>
    </div>
  );
};

export default DeleteConfirmation;
