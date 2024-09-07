import React, { useState } from 'react';
import StudentList from './StudentList';
import StudentForm from './StudentForm';
import './App.css'; // Importing the CSS file

const App = () => {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="app">
      <h1>Student List</h1>
      <button className="add-btn" onClick={toggleModal}>
        Add Student
      </button>
      {showModal && (
        <StudentForm onAddStudent={addStudent} toggleModal={toggleModal} />
      )}
      <StudentList students={students} />
    </div>
  );
};

export default App;
