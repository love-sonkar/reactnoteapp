import React from "react";

function Notes({ Noteitem, Delete }) {
  return (
    <div className="note">
      <h2>{Noteitem.Title}</h2>
      <p>{Noteitem.Des}</p>
      <button
        onClick={() => {
          Delete(Noteitem);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Notes;
