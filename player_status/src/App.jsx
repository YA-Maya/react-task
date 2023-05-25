import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [status, setStatus] = React.useState("online");
  const [counter, setCounter] = React.useState(0);

  // Toggle between the two status values - 'away' and 'online'
  function toggleStatus() {
    setStatus(status === "online" ? "away" : "online");
  }

  // Implement effect hook below.
  // Update the counter when status changes.
  useEffect(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, [status]);

  return (
    <div>
      <h1>{status}</h1>
      <h3>{counter}</h3>
      <button onClick={toggleStatus}>Toggle status</button>
    </div>
  );
}

export default App;