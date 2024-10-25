import React, { useState } from "react";

export default function TextForm(props) {
  // State to manage the text in the textarea
  // Initialize with an empty string
  const [text, setText] = useState("");

  // Function to handle the "Convert to Uppercase" button click
  const handleUpClick = () => {
    console.log("Uppercase was clicked!");
    // Convert the current text to uppercase
    let newText = text.toUpperCase();
    // Update the state with the new uppercase text
    setText(newText);
  };

  // Function to handle the "Convert to Lowercase" button click
  const handleDnClick = () => {
    console.log("Lowercase was clicked!");
    // Convert the current text to lowercase
    let newText = text.toLowerCase();
    // Update the state with the new lowercase text
    setText(newText);
  };

  // Function to handle changes in the textarea
  const handleOnChange = (event) => {
    console.log("Onchanged was clicked!");
    // Update the text state with the new value from the textarea
    setText(event.target.value);
  };

  return (
    <>
      {/* Main container for the text input area */}
      <div className="container">
        {/* Display the heading passed as a prop */}
        <h3>{props.heading}</h3>
        <div className="mb-3">
          {/* Textarea for user input */}
          <textarea
            className="form-control"
            placeholder="Enter the text to update"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
          {/* Button to convert text to uppercase */}
          <button className="btn btn-primary me-4 my-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          {/* Button to convert text to lowercase */}
          <button className="btn btn-primary me-4 my-2" onClick={handleDnClick}>
            Convert to Lowercase
          </button>
        </div>
      </div>

      {/* Container for text summary and preview */}
      <div className="container border border-dark rounded-3 p-2 my-3">
        <h3>Your Text Summary:</h3>
        <p>
          {/* Calculate and display word count */}
          Word count: {
            text.split(" ").filter((word) => word.length > 0).length
          }{" "}
          <br />
          {/* Display character count */}
          Characters count: {text.length} <br />
          {/* Estimate reading time based on average reading speed */}
          Reading Time:{" "}
          {(() => {
            const words = text.split(" ").filter((word) => word.length > 0).length;
            const minutes = Math.floor(words * 0.008);
            const seconds = Math.round((words * 0.008 - minutes) * 60);
            return `${minutes} min${minutes !== 1 ? 's' : ''} ${seconds} sec${seconds !== 1 ? 's' : ''}`;
          })()}
        </p>
        <h3>Preview:</h3>
        {/* Display the current text as a preview */}
        <p>
          {text.length > 0
            ? text
            : "Enter some text in the textbox above to see the preview here."}
        </p>
      </div>
    </>
  );
}
