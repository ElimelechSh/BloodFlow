



import React, { useContext } from "react";

import { Outlet } from "react-router-dom";

import { useDataContext } from "./DataProvider";
const ComponentB = () => {

  const { dataFor2 } = useDataContext();



  const doctorInitial = dataFor2 ? dataFor2.charAt(0).toUpperCase() : '?';
  console.log("dataFor2:",dataFor2)


  return (
    <div className="header">
      <div className="container-fluid bg-primary-subtle position-relative h-30">
      
        <div className="airplane-container">
          {/* <img
            src="../../public/imges/image-removebg-preview.png" // הקובץ שלך כאן
            alt="Airplane"
            className="airplane"
            loading="lazy"
          /> */}
        </div>

        {/* טקסט ואייקון */}
        <div className="d-flex justify-content-center align-items-center p-3">
          <div className="d-flex align-items-center w-50">
            <span className="me-3 text-muted">שלום ל{dataFor2 || "רופא"}</span>
            <div
              className="user-icon rounded-circle bg-success text-white d-flex justify-content-center align-items-center"
              style={{ width: "40px", height: "40px" }}
            >
              {doctorInitial}
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default ComponentB;
