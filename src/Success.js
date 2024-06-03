// Success.js
import React from 'react';

const Success = () => {
  // Retrieve form data from local storage
  const formData = JSON.parse(localStorage.getItem('formData'));

  // Check if formData exists before accessing its properties
  if (formData) {
    return (
      <div>
        <h1>Submission Successful</h1>
        <div>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Username: {formData.username}</p>
          <p>Email: {formData.email}</p>
          <p>Password: {formData.password}</p>
          <p>Phone: {formData.phone}</p>
          <p>Country: {formData.country}</p>
          <p>City: {formData.city}</p>
          <p>Pan No: {formData.pan}</p>
          <p>Aadhar No: {formData.aadhar}</p>
        </div>
      </div>
    );
  } else {
    console.error('No formData found in localStorage');
    return (
      <div>
        <h1>Error</h1>
        <p>No form data found.</p>
      </div>
    );
  }
};

export default Success;
