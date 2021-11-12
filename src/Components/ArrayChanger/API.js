import React, { useEffect, useState } from "react";
import axios, { post } from "axios";
import Body from "../Body/Body";
function API() {
  const url = "http://localhost:4000/List";
  const [Data, setData] = useState([]);
  const [Name, setName] = useState("");
  const [FileData, setFileData] = useState(null);
  const [btn, setbtn] = useState(false);
  const [MP3, setMP3] = useState("hello");
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
    console.log(file);
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

  const Play_Handler = (src) => {
    const audioelement = new Audio(MP3);

    setMP3(src);
    audioelement.play();
    setbtn(true);
  };

  const Delete_Handler = (id) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(window.location.reload());
  };

  const Pause_Handler = () => {
    console.log("object");
    setbtn(false);
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
