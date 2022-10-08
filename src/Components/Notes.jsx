import React from "react";
import Notesitem from "./Notesitem";
function Notes({ NotesTodo, DeleteNote }) {
  return (
    <div className="notes">
      <h1 className="center">Your notes Here</h1>
      {NotesTodo.length === 0 ? (
        <h2 className="notes-h2">Don't have a note please add</h2>
      ) : (
        NotesTodo.map((note, index) => {
          return <Notesitem key={index} Noteitem={note} Delete={DeleteNote} />;
        })
      )}
    </div>
  );
}

export default Notes;
