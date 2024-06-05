// src/Form.js
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    city: '',
    pan: '',
    aadhar: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const countries = ["India", "USA"]; // Replace with actual country list
  const cities = {
    India: ["Ghaziabad", "Noida"],
    USA: ["Las Vegas", "Los Angles"]
  }; // Replace with actual city list

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "First Name is required";
    if (!formData.lastName) errors.lastName = "Last Name is required";
    if (!formData.username) errors.username = "Username is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";
    if (!formData.phone) errors.phone = "Phone Number is required";
    if (!formData.country) errors.country = "Country is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.pan) errors.pan = "Pan No. is required";
    if (!formData.aadhar) errors.aadhar = "Aadhar No. is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Store form data in local storage before navigating
      localStorage.setItem('formData', JSON.stringify(formData));
      navigate('/success');
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      phone: '',
      country: '',
      city: '',
      pan: '',
      aadhar: ''
    });
    setErrors({});
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      <div>
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password</label>
        <div className="password-container">
          <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            onClick={() => setShowPassword(!showPassword)}
            className="eye-icon"
          />
        </div>
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label>Phone No.</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        {errors.phone && <span>{errors.phone}</span>}
      </div>
      <div>
        <label>Country</label>
        <select name="country" value={formData.country} onChange={handleChange} style={{ width: '85%' }} >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
        {errors.country && <span>{errors.country}</span>}
      </div>
      <div>
        <label>City</label>
        <select name="city" value={formData.city} onChange={handleChange} style={{ width: '85%' }}  >
          <option value="">Select City</option>
          {formData.country && cities[formData.country]?.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
        {errors.city && <span>{errors.city}</span>}
      </div>
      <div>
        <label>Pan No.</label>
        <input type="text" name="pan" value={formData.pan} onChange={handleChange} />
        {errors.pan && <span>{errors.pan}</span>}
      </div>
      <div>
        <label>Aadhar No.</label>
        <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} />
        {errors.aadhar && <span>{errors.aadhar}</span>}
      </div>

      <div className="button-container">
      <button type="button" onClick={handleReset}>Reset</button>
        
      </div>
      
      <div className="button-container">
        <button type="submit">Submit</button>
        
      </div>
      
     
    </form>
  );
};

export default Form;
