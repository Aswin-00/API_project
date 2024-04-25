import React, { useState, useEffect } from "react";
import api from "../api"; // Import your api module

import Navbar from "./Navbar";
function Indexepage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    fetch('http://127.0.0.1:8000/api/allfiles/')
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <Navbar />
      <div>
        <h2>Show Files</h2>
       <center> 
       <p>
       search box: <input type="serch" />
        </p> 
         </center> 
          <div  className="container"> 
            <div className="icon-box">
              <a href='#'>
                <img
                  className="icon"
                  src="/Dtafalonso-Yosemite-Flat-Folder.512.png"
                  alt="Folder Icon"
                />
              </a>
              <div>
                  <p className="title">file to download</p> {/* Use className instead of class */}
                  <p className="date">24-4-2023</p> {/* Use className instead of class */}
                  <p className="acton">
                    <button onClick={() => {}}>
                      Download
                    </button>
                  </p>
              </div>
            </div>
            <div className="icon-box">
              <a href='#'>
                <img
                  className="icon"
                  src="/Dtafalonso-Yosemite-Flat-Folder.512.png"
                  alt="Folder Icon"
                />
              </a>
              <div>
                  <p className="title">file to download</p> {/* Use className instead of class */}
                  <p className="date">24-4-2023</p> {/* Use className instead of class */}
                  <p className="acton">
                    <button onClick={() => {}}>
                      Download
                    </button>
                  </p>
              </div>
            </div>
            <div className="icon-box">
              <a href='#'>
                <img
                  className="icon"
                  src="/Dtafalonso-Yosemite-Flat-Folder.512.png"
                  alt="Folder Icon"
                />
              </a>
              <div>
                  <p className="title">file to download</p> {/* Use className instead of class */}
                  <p className="date">24-4-2023</p> {/* Use className instead of class */}
                  <p className="acton">
                    <button onClick={() => {}}>
                      Download
                    </button>
                  </p>
              </div>
            </div>
            <div className="icon-box">
              <a href='#'>
                <img
                  className="icon"
                  src="/Dtafalonso-Yosemite-Flat-Folder.512.png"
                  alt="Folder Icon"
                />
              </a>
              <div>
                  <p className="title">file to download</p> {/* Use className instead of class */}
                  <p className="date">24-4-2023</p> {/* Use className instead of class */}
                  <p className="acton">
                    <button onClick={() => {}}>
                      Download
                    </button>
                  </p>
              </div>
            </div>
            <div className="icon-box">
              <a href='#'>
                <img
                  className="icon"
                  src="/Dtafalonso-Yosemite-Flat-Folder.512.png"
                  alt="Folder Icon"
                />
              </a>
              <div>
                  <p className="title">file to download</p> {/* Use className instead of class */}
                  <p className="date">24-4-2023</p> {/* Use className instead of class */}
                  <p className="acton">
                    <button onClick={() => {}}>
                      Download
                    </button>
                  </p>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}

export default Indexepage; // Corrected the export statement
