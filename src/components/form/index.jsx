import React, { useState } from 'react';
import "./index.css"

const Form = (props) => {
  const [formData, setFormData] = useState({ searchTerm: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.movieSearch(formData.searchTerm); // Pass the searchTerm to the movieSearch function
  };

  const handleChange = (event) => {
    setFormData({ searchTerm: event.target.value });
  };

  return (
    <div >
      <form className='form' onSubmit={handleSubmit}>
        <input
        
          type="text"
          name="searchTerm"
          value={formData.searchTerm}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
