import React, { useState } from "react";

function Test() {
  const [value, setValue] = useState("");
  const [audiomp3, setAudio] = useState(null);
  const [data, setData] = useState([
    { id: Math.floor(Math.random() * 2500000), filename: "" },
  ]);
  const [file, setfile] = useState(null);
  const PLAYERHANDLER = (e) => {
    setValue(e.target.value);
    const file = e.target.files[0];
    setfile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setAudio(reader.result);
    };
    setData([...data, { filename: file }]);
  };
  const audio = new Audio(audiomp3);
  const Player = () => {
    audio.play();
    console.log("Playing");
  };
  const Pause = () => {
    audio.pause();
    console.log("Pause");
  };

  return (
    <div>
      <input
        type="file"
        value={value}
        onChange={(e) => PLAYERHANDLER(e)}
      ></input>
      <button className="btn btn-dark" onClick={Player}>
        Play
      </button>
      <button
        className="btn btn-dark"
        style={{ margin: "20px" }}
        onClick={Pause}
      >
        Pause
      </button>
    </div>
  );
}

export default Test;
