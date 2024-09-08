import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Modal, Form, ListGroup, Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', age: '', class: '', subject: '' });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://rest-backend-prosevo.onrender.com/students');
      setStudents(response.data);
    } catch (error) {
      toast.error('Error fetching students');
    } finally {
      setLoading(false);
    }
  };

  const handleShow = (student = null) => {
    setSelectedStudent(student);
    setForm(student || { name: '', age: '', class: '', subject: '' });
    setIsAdding(!student);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedStudent(null);
    setForm({ name: '', age: '', class: '', subject: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (isAdding) {
        await axios.post('https://rest-backend-prosevo.onrender.com/students', form);
        toast.success('Student added successfully');
      } else {
        await axios.put(`https://rest-backend-prosevo.onrender.com/students/${selectedStudent._id}`, form);
        toast.success('Student updated successfully');
      }
      fetchStudents();
      handleClose();
    } catch (error) {
      toast.error(`Error ${isAdding ? 'adding' : 'updating'} student`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete(`https://rest-backend-prosevo.onrender.com/students/${selectedStudent._id}`);
      toast.success('Student deleted successfully');
      fetchStudents();
      handleClose();
    } catch (error) {
      toast.error('Error deleting student');
    } finally {
      setLoading(false);
    }
  };

  if (loading && !showModal) {
    return (
      <div className="text-center">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Container>
      <h1 className="my-3">Student List</h1>
      <Button variant="primary" onClick={() => handleShow()} className="mb-3">
        Add Student
      </Button>
      {students.length > 0 ? (
        <ListGroup>
          {students.map(student => (
            <ListGroup.Item key={student.id}>
              {student.name}
              <Button variant="info" onClick={() => handleShow(student)} className="float-end">
                View
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>No students available.</p>
      )}

      {/* Combined Modal for Add/Update/Delete */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isAdding ? 'Add New Student' : 'Student Details'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={form.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" name="age" value={form.age} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formClass">
              <Form.Label>Class</Form.Label>
              <Form.Control type="text" name="class" value={form.class} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" name="subject" value={form.subject} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {!isAdding && (
            <Button variant="danger" onClick={handleDelete} disabled={loading}>
              {loading ? 'Deleting...' : 'Delete'}
            </Button>
          )}
          <Button variant="secondary" onClick={handleClose} disabled={loading}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} disabled={loading}>
            {isAdding ? (loading ? 'Adding...' : 'Add Student') : (loading ? 'Updating...' : 'Update')}
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </Container>
  );
}

export default App;
