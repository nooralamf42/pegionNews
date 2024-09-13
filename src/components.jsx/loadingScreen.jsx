import React from "react";

function LoadingScreen() {
  return (
    <div className="fixed bg-black inset-0 z-10 place-items-center grid">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
