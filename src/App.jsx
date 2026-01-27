import { useState } from "react";
import { Die } from "./Die.jsx";

function App() {
  return (
    <main>
      <Die value={1} />
      <Die value={2} />
      <Die value={3} />
      <Die value={5} />
      <Die value={5} />
      <Die value={1} />
      <Die value={1} />
      <Die value={1} />
      <Die value={1} />
      <Die value={1} />
    </main>
  );
}

export default App;
