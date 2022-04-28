import React, { useState } from "react";

export default function CreateArea(props) {
  const [noteData, setnoteData] = useState({
    title: "",
    content: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    return setnoteData((prevVal) => {
      return {
        ...prevVal,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    props.onAdd(noteData);
    setnoteData((prevVal) => ({
      ...prevVal,
      title: "",
      content: ""
    }));

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={noteData.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={noteData.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}
