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
              <td>First Name:</td>
              <td>{formData.firstName}</td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td>{formData.lastName}</td>
            </tr>
            <tr>
              <td>Username:</td>
              <td>{formData.username}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{formData.email}</td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>{formData.password}</td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td>{formData.phone}</td>
            </tr>
            <tr>
              <td>Country:</td>
              <td>{formData.country}</td>
            </tr>
            <tr>
              <td>City:</td>
              <td>{formData.city}</td>
            </tr>
            <tr>
              <td>Pan No.:</td>
              <td>{formData.pan}</td>
            </tr>
            <tr>
              <td>Aadhar No.:</td>
              <td>{formData.aadhar}</td>
            </tr>
            {/* Add more rows for additional form fields */}
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
