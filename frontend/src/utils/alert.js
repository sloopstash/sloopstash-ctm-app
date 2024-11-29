import React, { useEffect, useState } from 'react';

const Alert = ({ message, type, showToast, onClose }) => {
  const [show, setShow] = useState(showToast);

  useEffect(() => {
    setShow(showToast);
  }, [showToast]);

  const toastClass = type === 'success' ? 'bg-success' : 'bg-danger';

  return (
    show && (
      <div
        className={`toast align-items-center text-white ${toastClass} border-0 position-fixed top-0 end-0 m-3`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">
            {message}
          </div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={() => {
              setShow(false);
              onClose && onClose();
            }}
          ></button>
        </div>
      </div>
    )
  );
};

export default Alert;
