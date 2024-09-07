import React, { useState } from 'react';

const StudentForm = ({ onAddStudent, toggleModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    studentClass: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(formData);
    toggleModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={toggleModal}>
          &times;
        </span>
        <h2>Add Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Class:</label>
            <input
              type="text"
              name="studentClass"
              value={formData.studentClass}
              onChange={handleChange}
              required
            />
          </div>
          <button className="submit-btn" type="submit">
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
