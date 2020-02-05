import React from 'react';

function Form ({ handleSubmit, handleChange, formData, listOfSubmissions }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" onChange={event => handleChange(event)} value={formData.firstName} />
        <input type="text" name="lastName" onChange={event => handleChange(event)} value={formData.lastName} />
        <input type="submit" />
      </form>
      {listOfSubmissions()}
    </div>
  )
}

export default Form;