import React, { useState } from 'react';
import Notes from './Notes';
import AddNote from './AddNote';
import data from '../data.json';

const Home = () => {

  const [notes, setNotes] = useState([...data]);

  const addNote = (newNote) => {
    console.log(newNote);
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  return (
    <div className="contentWrapper">
      <AddNote
        addNote={addNote}
      />
      <Notes
        notes={notes}
      />
    </div>
  );
};

export default Home;