import React from "react";
import data from '../data.json';

const Notes = () => {
  console.log(data);
  return (
    <div>
      <h1>NOTES</h1>
      <div className="notesWrapper">
        {
          data.map((note, index) => {
            return (
              <div key={index} className="note">
                <div>{note.date}</div>
                <h2>{note.title}</h2>
                <div>{note.content}</div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Notes;