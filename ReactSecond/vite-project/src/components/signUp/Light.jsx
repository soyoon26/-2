import { useState } from "react";
const Light = () => {
  const [button, setButton] = useState("OFF");

  return (
    <div>
      {button === "ON" ? (
        <h1 style={{ backgroundColor: "yellow" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "grey" }}>OFF</h1>
      )}
      <button
        onClick={() => {
          setButton(button === "ON" ? "OFF" : "ON");
        }}
      >
        {button === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};

export default Light;
