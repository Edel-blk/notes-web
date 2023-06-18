import React from "react";

const AddNote = () => {
  return (
    <div>
      <h1>
        ADD NOTE
      </h1>
      <form>
        <input type="text" name="title" placeholder="Title"/>
        <input type="text" name="note" placeholder="Note"/>
        <input type="date" name="date"/>
      </form>
    </div>
  );
};

export default AddNote;