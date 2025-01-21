
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const nav = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/users"; // זה מציין לאן להתקשר
      const response = await axios.get(url); // קריאה לשרת
      console.log(response.data); 
      handleSuccess(response);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleSuccess = () => {
    toast('🦄 ההרשמתך בוצע בהצלחה', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: "Bounce",
    });

    // עיכוב ניווט לדף הבא לשתי שניות
    setTimeout(() => {
      nav("./welcome");
    }, 2000);
  }

  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={onSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn;
