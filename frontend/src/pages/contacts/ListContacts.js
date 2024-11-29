import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContacts } from '../../context/ContactsContext'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import '../../styles/listContacts.scss';
import Alert from '../../utils/alert';

const ListContacts = () => {
  const navigate = useNavigate();
  const { contacts = [], errorMessage, successMessage, fetchContacts, handleDeleteContact } = useContacts();
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const confirmDelete = (contactId) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this contact?');
    if (isConfirmed) {
      handleDeleteContact(contactId);
    }
  };

  return (
    <div className="container my-5">
      <div className="row mb-4">
        <div className="col-md-12">
          <h2>Contact List</h2>
        </div>
      </div>

      {/* Display Success Alert */}
      {successMessage && showAlert && (
        <Alert
          message={successMessage}
          type="success"
          onClose={() => setShowAlert(false)} 
        />
      )}

      {/* Display Error Alert */}
      {errorMessage && showAlert && (
        <Alert
          message={errorMessage}
          type="danger"
          onClose={() => setShowAlert(false)} 
        />
      )}

      <div className="row mb-4">
        <div className="col-md-6">
          <button
            onClick={() => navigate('/dashboard/create-contact')}
            className="btn btn-outline-primary btn-sm me-2"
          >
            Create Contact
          </button>
          <button
            onClick={() => navigate(-1)}  // Navigate to the previous page
            className="btn btn-outline-secondary btn-sm"
          >
            Go Back
          </button>
        </div>
      </div>

      <div className="table-responsive mt-4">
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <tr key={contact._id}>
                  <td>{contact.name}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-success me-2"
                      onClick={() => navigate(`/dashboard/edit-contact/${contact._id}`)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => confirmDelete(contact._id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListContacts;
