// Import necessary styles and components
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

// Define the main App component
function App() {
  return (
    // Use React Fragment to wrap multiple elements without adding extra nodes to the DOM
    <>
      {/* Render the Navbar component with custom props */}
      <Navbar title="TextUtils" aboutText="About Us" />

      {/* Container for the main content */}
      <div className="container my-3">
        {/* Render the TextForm component with a custom heading */}
        <TextForm heading="Enter the text to analyze below:" />
      </div>

      {/* Empty body tag - this is unnecessary and can be removed */}
      <body></body>
    </>
  );
}

// Export the App component as the default export
export default App;
