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
    let Key;
    console.log("add", Title, Des);
    if (NotesTodo.length == 0) {
      Key = 0;
    } else {
      Key = NotesTodo[NotesTodo.length - 1].Key + 1;
    }
    let NewNote = {
      Key: Key,
      Title: Title,
      Des: Des,
    };
    setNotesTodo([...NotesTodo, NewNote]);
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
