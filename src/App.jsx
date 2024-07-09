import React from "react";
import "./App.css";
import GymBody from "./components/body";
function App() {
  React.useEffect(() => {
    stickylogo();
  }, []);

  return (
    <div className="app">
      <GymBody />
     
    </div>
  );
}
import stickylogo from "./scripts/stickylogo";

export default App;
