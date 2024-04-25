import React from "react";
import "../styles/Folder.css"

function Note({ note, onDelete }) {

    return (
            <div className="icon-box">
              <a href={note.file}>
                <img
                  className="icon"
                  src="/Dtafalonso-Yosemite-Flat-Folder.512.png"
                  alt="Folder Icon"
                />
              </a>
              <div className="decription">
                  <p className="title">{note.title}</p> {/* Use className instead of class */}
                  <p className="date">{note.create}</p> {/* Use className instead of class */}
                  <p className="acton">
                    <button onClick={() => { window.location.href = note.file; }}>
                      Download
                    </button>
                  </p>
                  <p className="acton">
                    <button onClick={() => { window.location.href = note.file; }}>
                      update
                    </button>
                  </p>
                  <p className="acton">
                    <button onClick={() => { onDelete(note.file); }}>
                      remove
                    </button>
                  </p>

              </div>
            </div>
          

        

    );

}

export default Note