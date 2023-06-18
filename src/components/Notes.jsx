import React from 'react';
import PropTypes from 'prop-types';

const Notes = ({notes}) => {
  return (
    <div>
      <h1>NOTES</h1>
      <div className="notesWrapper">
        {
          notes.map((note, index) => {
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

Notes.propTypes = {
  notes: PropTypes.array,
};

export default Notes;