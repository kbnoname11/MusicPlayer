import React, { useEffect, useState } from "react";
import SampleBody from "./SampleBody";
function Changer() {
  const LOCAL_STORAGE_KEY = "THISISMYKEY";
  const [Name, setName] = useState("");
  const [File, setFile] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [Myarray, SetMyArray] = useState([]);
  const [srcmp3, setSrcMp3] = useState("");

  const Pusher = () => {
    const NewItems = {
      id: Math.floor(Math.random() * 2500000),
      song_name: Name,
      author: "Author",
      Length: "12345",
      Image: ImageUrl,
      src: srcmp3,
    };
    SetMyArray([...Myarray, NewItems]);
  };

  useEffect(() => {
    const retrieve = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    SetMyArray(retrieve);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Myarray));
  }, [Myarray]);

  const FileHandler = (e) => {
    setFile(e.target.value);
    const myfile = e.target.files[0];
    const reader = new FileReader();
    // console.log(myfile);
    setSrcMp3({
      name: myfile.name,
      lastModified: myfile.lastModified,
      lastModifiedDate: myfile.lastModifiedDate,
      webkitRelativePath: myfile.webkitRelativePath,
      size: myfile.size,
      type: myfile.type,
      Prototype: myfile.Prototype,
    });
    reader.readAsDataURL(myfile);
    reader.onload = () => {
      //   console.log(reader.result);
    };
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={Name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter Name"
        ></input>
        <input
          type="file"
          value={File}
          onChange={(e) => FileHandler(e)}
          placeholder="Selet File"
        ></input>
        <input
          type="text"
          value={ImageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
          placeholder="Enter Image Url"
        ></input>
        <button type="button" onClick={Pusher}>
          PUSH
        </button>
      </form>
      {Myarray.map((items) => {
        const { song_name, id, Image, src } = items;
        return (
          <div key={id} className="col">
            <SampleBody
              song_name={song_name}
              Image={Image}
              id={id}
              key={id}
              src={src}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Changer;
