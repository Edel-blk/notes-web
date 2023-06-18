import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddNote = ({addNote}) => {
  const [newNote, setNewNote] = useState({});

  const handleChange = (e) => {
    setNewNote({...newNote, [e.target.name]: e.target.value});
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const noteObject = {
      ...newNote,
      check: false,
    };

    addNote(noteObject);
  };

  return (
    <div>
      <h1>
        ADD NOTE
      </h1>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange}/>
        <textarea name="content" placeholder="Note" onChange={handleChange}/>
        <input type="date" name="date" onChange={handleChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  );
};

AddNote.propTypes = {
  addNote: PropTypes.func
};

export default AddNote;