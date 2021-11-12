import React, { useEffect, useState } from "react";
import axios, { post } from "axios";
import Body from "../Body/Body";
function API() {
  const url = "http://localhost:4000/List";
  const [Data, setData] = useState([]);
  const [isplaying, setIsPlaying] = useState(true);

  const [Name, setName] = useState("");
  const [FileData, setFileData] = useState(null);
  const [btn, setbtn] = useState(false);
  const [MP3, setMP3] = useState(null);
  const Fileread = async () => {
    const a = await fetch(url);
    const response = await a.json();
    setData(response);
  };

  useEffect(() => {
    Fileread();
  }, []);

  const ChangeHandler = (e) => {
    var file = e.target.files;
    const FReader = new FileReader();
    FReader.readAsDataURL(file[0]);
    FReader.onload = (e) => {
      setFileData(FReader.result);
    };
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        song_name: Name,
        id: Math.random() * 12313321323,
        src: FileData,
      }),
    }).then(window.location.reload());
  };
  const audioelement = new Audio(MP3);

  const Loader = (src) => {
    setMP3(src);
    console.log(src);
  };

  const audio = new Audio(MP3);
  const Play_Handler = () => {
    if (MP3 === null) {
      alert("No file Selected");
    } else {
      audio.play();
      console.log("Playing");
    }
  };
  const Pause_Handler = () => {
    audio.pause();
    console.log("Pause");
  };

  const Delete_Handler = (id) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(window.location.reload());
  };

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="file"
          name="file"
          onChange={(e) => ChangeHandler(e)}
        ></input>
        <button type="submit" onClick={(e) => SubmitHandler(e)}>
          Submit
        </button>
      </form>

      <div>
        {Data.map((items) => {
          const { id, song_name, src, Image } = items;
          return (
            <div key={id} className="col">
              <Body
                Name={song_name}
                Play_Handler={(src) => Play_Handler(src)}
                Pause_Handler={(src) => Pause_Handler(src)}
                Delete_Handler={(id) => Delete_Handler(id)}
                Loader={(src) => Loader(src)}
                Image={Image}
                id={id}
                src={src}
                btn_arg={btn}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default API;
