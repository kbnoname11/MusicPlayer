import React from "react";
// import Body from "./Body/Body";
import Navbar from "./Navbar/Navbar";
// import Footer from "./Footer/Footer";
import Index from "./Backend/Index";
import Manual_Input from "./Body/Manual_Input";
function Assembler() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="row">
        <Index />
        <Manual_Input />;
      </div>
    </React.Fragment>
  );
}

export default Assembler;
