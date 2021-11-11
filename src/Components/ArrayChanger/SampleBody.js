import React from "react";
import Faded from "../../assets/Faded.mp3";
function SampleBody({ song_name, src, Image, id }) {
  return (
    <div
      style={{
        paddingTop: "10px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <div
        key={id}
        className="card text-white bg-dark mb-3"
        style={{
          width: "210px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={Image}
          className="card-img-top"
          // style={{ width: "50px", height: "50px" }}
          alt="...."
        />
        <div className="card-body">
          <h5 className="card-title" style={{ textAlign: "center" }}>
            {song_name}
          </h5>
          <button
            // onClick={() => Play_Handler(src)}
            // disabled={btn_arg}
            className="btn btn-primary"
            style={{ alignSelf: "center" }}
          >
            Play
          </button>
          <button
            // onClick={() => Pause_Handler(src)}
            className="btn btn-primary"
            style={{ margin: "20px" }}
          >
            Pause
          </button>
        </div>
        {/* <audio src={Faded} controls={true} /> */}
      </div>
    </div>
  );
}

export default SampleBody;
