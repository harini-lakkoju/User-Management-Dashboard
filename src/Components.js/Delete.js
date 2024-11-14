import React, { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Delete = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const deleteAttempted = useRef(false);  // Ref to ensure single deletion attempt

  useEffect(() => {
    if (deleteAttempted.current) return;  // If already deleted, skip further calls

    deleteAttempted.current = true;
    console.log("Attempting to delete post with ID:", id);

    const deletePost = async () => {
      try {
        const checkResponse = await fetch(`http://localhost:4000/posts/${id}`);

        if (checkResponse.status === 404) {
          alert('Record not found. Nothing to delete.');
          console.log('Record does not exist before attempting deletion.');
          navigate('/');
          return;
        }

        const res = await fetch(`http://localhost:4000/posts/${id}`, {
          method: 'DELETE',
        });

        if (res.status === 200) {
          alert('Deleted successfully');
          navigate('/');
        } else if (res.status === 404) {
          alert('Record not found or already deleted');
          console.log("Deletion attempt failed; record was not found.");
        } else {
          alert('Error deleting record');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error deleting record');
      }
    };

    deletePost();
  }, [id, navigate]);

  return <div>Deleting...</div>;
};

export default Delete;
