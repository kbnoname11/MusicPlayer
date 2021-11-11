import React from "react";

function Body(props) {
  const { Name, Play_Handler, Pause_Handler, Image, src, btn_arg } = props;
  return (
    <div
      style={{ paddingTop: "0px", paddingLeft: "20px", paddingRight: "20px" }}
    >
      <div
        className="card text-white bg-dark mb-3"
        style={{
          width: "210px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={Image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ textAlign: "center" }}>
            {Name}
          </h5>

          <button
            onClick={() => Play_Handler(src)}
            disabled={btn_arg}
            className="btn btn-primary"
            style={{ alignSelf: "center" }}
          >
            Play
          </button>
          <button
            onClick={() => Pause_Handler(src)}
            className="btn btn-primary"
            style={{ margin: "20px" }}
          >
            Pause
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
