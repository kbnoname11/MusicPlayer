import React, { useState } from "react";
import Body from "../Body/Body";
import { SongsArray } from "./SongsArray";
function Index() {
  const [pause, setpause] = useState(null);
  const [btn, setBtn] = useState(false);

  const Play_Handler = (src) => {
    var audio = new Audio(src);
    setpause(audio);
    audio.play();
    setBtn(true);
  };

  const Pause_Handler = () => {
    if (pause === null) {
      alert("Play First");
    } else {
      pause.pause();
      setBtn(false);
    }
  };
  return (
    <React.Fragment>
      {SongsArray.map((items) => {
        return items.Song_url;
      })}
      {SongsArray.map((items) => {
        const { song_name, Image, id, src } = items;
        return (
          <div key={id} className="col">
            <Body
              Name={song_name}
              Play_Handler={Play_Handler}
              Pause_Handler={Pause_Handler}
              Image={Image}
              src={src}
              btn_arg={btn}
            />
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Index;
