import React, { useState } from 'react';
import Notes from './Notes';
import AddNote from './AddNote';
import data from '../data.json';
import { Grid } from 'semantic-ui-react';

const { Column } = Grid;

const Home = () => {

  const [notes, setNotes] = useState([...data]);

  const addNote = (newNote) => {
    console.log(newNote);
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  return (
    <Grid container>
      <Column width={16}>
        <AddNote
          addNote={addNote}
        />
      </Column>
      <Column width={16}>
        <Notes
          notes={notes}
        />
      </Column>
    </Grid>
  );
};

export default Home;