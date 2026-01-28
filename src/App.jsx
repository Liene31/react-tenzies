import { useState } from "react";
import { nanoid } from "nanoid";
import { Die } from "./Die.jsx";

function App() {
  const [dice, setDice] = useState(getAllRandomDice());

  function generateRandomNo() {
    return Math.ceil(Math.random() * 6);
  }

  function getAllRandomDice() {
    const arr = Array.from({ length: 10 }).map(() => {
      return { id: nanoid(), value: generateRandomNo(), isHeld: false };
    });

    return arr;
  }

  function handleRoll() {
    setDice(getAllRandomDice());
  }

  function toggleDice(id) {
    setDice((prev) => {
      return prev.map((item) => {
        return item.id === id
          ? { ...item, isHeld: item.isHeld ? false : true }
          : { ...item };
      });
    });
  }

  const diceElement = dice.map((item) => {
    return (
      <Die
        key={item.id}
        value={item.value}
        isHeld={item.isHeld}
        toggleDice={() => toggleDice(item.id)}
      />
    );
  });

  return (
    <main>
      <div className="dice-el">{diceElement}</div>
      <button className="roll-btn" onClick={handleRoll}>
        Roll
      </button>
    </main>
  );
}

export default App;
