// Import React and PropTypes for prop validation
import React from "react";
import PropTypes from "prop-types";

// Define the Navbar component as a functional component
export default function Navbar(props) {
  return (
    <div>
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Navbar brand/logo */}
          <a className="navbar-brand" href="/">
            {props.title} {/* Display the title passed as a prop */}
          </a>
          {/* Hamburger menu button for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible navbar content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navigation menu items */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.aboutText}{" "}
                  {/* Display the aboutText passed as a prop */}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
            </ul>
            {/* Search form */}
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Here"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

// PropTypes for type-checking the props
Navbar.propTypes = {
  title: PropTypes.string.isRequired, // title prop is required and must be a string
  aboutText: PropTypes.string, // aboutText prop is optional but must be a string if provided
};

// Default props in case they are not provided
Navbar.defaultProps = {
  title: "Set title here", // Default title
  aboutText: "About text here", // Default about text
};
