import React, { useState } from "react";

function AddNotes({ addnote }) {
  const [Title, setTitle] = useState("");
  const [Des, setDes] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    if (!Title || !Des) {
      alert("please fill all");
    } else {
      addnote(Title, Des);
    }

    setTitle("");
    setDes("");
  };

  return (
    <div className="addnotes">
      <h2 className="h2 center">Add Your Personal Notes</h2>
      <form action="">
        <div className="title">
          <input
            type="text"
            placeholder="Enter your title"
            value={Title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="desc">
          <textarea
            type="text"
            placeholder="Enter your Note"
            value={Des}
            onChange={(e) => {
              setDes(e.target.value);
            }}
          />
        </div>
        <div className="button">
          <button onClick={Submit}>Add Notes</button>
        </div>
      </form>
    </div>
  );
}

export default AddNotes;
