import React from "react";
import Test from "../test/Test";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            MusicPlayer
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="accordion-item" style={{ alignItems: "center" }}>
        <h2
          className="accordion-header"
          style={{ display: "flex", alignItems: "center" }}
          id="headingTwo"
        >
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Play Local Songs
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <Test />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
