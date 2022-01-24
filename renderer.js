import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ipcRenderer } from "electron";

const App = () => {
  const [aaaa, setAaaa] = useState(0);
  useEffect(() => {
    const callback = (_event, data) => {
      setAaaa(data);
    };
    ipcRenderer.on("test-debugger", callback);
    return () => {
      return ipcRenderer.off("test-debugger", callback);
    };
  }, []);
  return <div style={{ padding: 50, color: "red" }}>{aaaa}</div>;
};

window.addEventListener("keydown", (event) => {
  // In chrome dev tool source panel debugger here
  console.log("debugger this line");
});

ReactDOM.render(<App />, document.getElementById("root"));

window.addEventListener("keydown", (event) => {
  // In chrome dev tool source panel debugger here
  console.log("debugger this line");
});

ReactDOM.render(<App />, document.getElementById("root"));
