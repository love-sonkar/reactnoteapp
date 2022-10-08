import React, { useState, useEffect } from "react";
import AddNotes from "./AddNotes";
import Notes from "./Notes";

function Mainsection() {
  let initNote;
  if (localStorage.getItem("NotesTodo") === null) {
    initNote = [];
  } else {
    initNote = JSON.parse(localStorage.getItem("NotesTodo"));
  }
  const addnote = (Title, Des) => {
    let NewNote = {
      Title: Title,
      Des: Des,
    };
    setNotesTodo([NewNote, ...NotesTodo]);
  };

  const Delete = (Noteitem) => {
    setNotesTodo(
      NotesTodo.filter((e) => {
        return e !== Noteitem;
      })
    );
    localStorage.setItem("NotesTodo", JSON.stringify(NotesTodo));
  };
  const [NotesTodo, setNotesTodo] = useState(initNote);
  useEffect(() => {
    localStorage.setItem("NotesTodo", JSON.stringify(NotesTodo));
  }, [NotesTodo]);

  return (
    <div className="maincontainer">
      <AddNotes addnote={addnote} />
      <Notes NotesTodo={NotesTodo} DeleteNote={Delete} />
    </div>
  );
}

export default Mainsection;
