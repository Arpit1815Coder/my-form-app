import React from 'react';

const Success = () => {
  // Retrieve form data from local storage
  const formData = JSON.parse(localStorage.getItem('formData'));

  // Check if formData exists before accessing its properties
  if (formData) {
    return (
      <div>
        <h1>Submission Successful</h1>
        <table>
          <tbody>
            <tr>
              <td><strong>First Name:</strong></td>
              <td>{formData.firstName}</td>
            </tr>
            <tr>
              <td><strong>Last Name:</strong></td>
              <td>{formData.lastName}</td>
            </tr>
            <tr>
              <td><strong>Username:</strong></td>
              <td>{formData.username}</td>
            </tr>
            <tr>
              <td><strong>Email:</strong></td>
              <td>{formData.email}</td>
            </tr>
            <tr>
              <td><strong>Password:</strong></td>
              <td>{formData.password}</td>
            </tr>
            <tr>
              <td><strong>Phone Number:</strong></td>
              <td>{formData.phone}</td>
            </tr>
            <tr>
              <td><strong>Country:</strong></td>
              <td>{formData.country}</td>
            </tr>
            <tr>
              <td><strong>City:</strong></td>
              <td>{formData.city}</td>
            </tr>
            <tr>
              <td><strong>Pan No.:</strong></td>
              <td>{formData.pan}</td>
            </tr>
            <tr>
              <td><strong>Aadhar No.:</strong></td>
              <td>{formData.aadhar}</td>
            </tr>
          
          </tbody>
        </table>
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
