import React from "react";
import Navbar from "../navbar/Navbar";

export default function Small(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}
