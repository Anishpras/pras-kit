import React from "react";
import Nav from "../../components/Nav";

const navbars = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <Nav />
      <div className="w-full py-8 flex flex-wrap justify-center items-center gap-8"></div>
    </div>
  );
};

export default navbars;
