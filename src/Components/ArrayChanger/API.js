import React, { useState } from "react";
// import axios, { post } from "axios";
// import Body from "../Body/Body";
function API() {
  // const SampleImage =
  // "https://i.picsum.photos/id/362/200/200.jpg?hmac=AKqfQ8tnyGapdUtZ1f35ugad3WkJY-g1tn5hi7kF2zY";
  const url = "http://localhost:4000/List";
  //   const url = "https://api.jsonbin.io/b/618e40604a56fb3dee0dd4e0";
  // const [Data, setData] = useState([]);

  const [Name, setName] = useState("");
  const [FileData, setFileData] = useState(null);
  // const [btn, setbtn] = useState(false);
  // const [MP3, setMP3] = useState(null);
  const [Image, setImage] = useState(null);

  //Fetching the Data from the JSON FILE
  // const Fileread = async () => {
  //   const a = await fetch(url);
  //   const response = await a.json();
  //   const abn = response.map((items) => {
  //     const { id, song_name, src, Image } = items;
  //     return { id, song_name, src, Image };
  //   });
  //   setData(abn);
  // };

  // useEffect(() => {
  //   Fileread();
  // }, []);

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
    //SENDING the data in JSON File
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        song_name: Name,
        id: Math.random() * 12313321323,
        src: FileData,
        Image: Image,
      }),
    }).then(window.location.reload());
  };
  // const audioelement = new Audio(MP3);

  // const Loader = (src) => {
  //   if (src === null) {
  //     alert("Empty File");
  //   } else {
  //     setMP3(src);
  //     console.log(src);
  //   }
  // };

  // const audio = new Audio(MP3);
  // const Play_Handler = () => {
  //   if (MP3 === null) {
  //     alert("No file Selected");
  //   } else {
  //     audio.play();
  //     console.log("Playing");
  //   }
  // };
  // const Pause_Handler = () => {
  //   audio.pause();
  //   console.log("Pause");
  // };

  // const Delete_Handler = (id) => {
  //   fetch(`${url}/${id}`, {
  //     method: "DELETE",
  //   }).then((res) => res.json());
  //   // .then(window.location.reload());
  // };

  const urlHandler = (e) => {
    var file = e.target.value;
    console.log(file);
    setFileData(file);
  };
  return (
    <div style={{ margin: "10px" }}>
      <form style={{ margin: "20px" }} className="form">
        <input
          type="text"
          placeholder="Enter Song Name"
          onChange={(e) => {
            if (e.target.value === "" || null) {
              alert("Enter a Name");
            }
            setName(e.target.value);
          }}
        />
        <input
          style={{ margin: "10px" }}
          type="text"
          placeholder="Enter Image Url"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <input
          style={{ marginLeft: "0px" }}
          type="file"
          name="file"
          onChange={(e) => ChangeHandler(e)}
        ></input>
        or
        <input
          type="text"
          name="url"
          style={{ marginRight: "10px" }}
          placeholder="Enter Song Url ...."
          onChange={(e) => urlHandler(e)}
        />
        <button
          className="btn btn-dark"
          type="submit"
          onClick={(e) => SubmitHandler(e)}
        >
          Submit
        </button>
      </form>

      {/* <div className="row">
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
                Song_Image={Image ? Image : SampleImage}
                id={id}
                src={src}
                btn_arg={btn}
              />
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default API;
