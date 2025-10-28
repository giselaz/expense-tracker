import { createContext, useContext, useState, useEffect } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

// Create context
const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    show: false,
    message: "",
    bg: "danger",
  });

  const showToast = (message, bg = "danger") => {
    setToast({ show: true, message, bg });
  };
  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Global Toast */}
      <ToastContainer
        position="top-end"
        className="p-3"
        style={{
          position: "fixed",
          top: "20px",
          right: "0%",
          color: "white",
          zIndex: 2000,
          maxWidth: "90vw",
        }}
      >
        <Toast
          onClose={() => setToast({ ...toast, show: false })}
          show={toast.show}
          delay={3000}
          autohide
          bg={toast.bg}
        >
          <Toast.Body>{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </ToastContext.Provider>
  );
};
