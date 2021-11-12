import React from "react";

function Body(props) {
  const {
    Name,
    Play_Handler,
    Pause_Handler,
    Song_Image,
    src,
    btn_arg,
    id,
    Delete_Handler,
    Loader,
  } = props;
  return (
    <div
      style={{ paddingTop: "0px", paddingLeft: "10px", paddingRight: "10px" }}
    >
      <div
        className="card text-white bg-dark mb-3"
        style={{
          width: "220px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={Song_Image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ textAlign: "center" }}>
            {Name}
          </h5>
          <button
            onClick={() => Loader(src)}
            className="btn btn-primary"
            style={{ margin: "20px", width: "70px" }}
          >
            Load
          </button>
          <button
            onClick={() => Play_Handler(src)}
            disabled={btn_arg}
            className="btn btn-primary"
            style={{ alignSelf: "center", width: "70px" }}
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
          <button
            onClick={() => Delete_Handler(id)}
            disabled={btn_arg}
            className="btn btn-primary"
            style={{ alignSelf: "center" }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
