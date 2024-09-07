import React from 'react';

const StudentList = ({ students }) => {
  return (
    <div className="student-list">
      <h2>List of Students</h2>
      {students.length > 0 ? (
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student.name} - Age: {student.age}, Class: {student.studentClass}
            </li>
          ))}
        </ul>
      ) : (
        <p>No students added yet.</p>
      )}
    </div>
  );
};

export default StudentList;
