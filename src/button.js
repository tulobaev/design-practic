import React from "react";

const Buttonclick  = ({ label, onClick }) => {
  const myStyle = {
    fontsize: "17px",
    border: "none",
    width: "183px",
    height: "44px",
    borderRadius: "8px",
    backgroundColor: "#e67e22",
    color: "white",
  };
  return (
    <button style={myStyle} onClick={onClick} >
      {label}
    </button>
  );
};

export default Buttonclick;
