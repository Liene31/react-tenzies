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
    setDice((prev) => {
      return prev.map((item) => {
        return item.isHeld === true
          ? { ...item }
          : { ...item, value: generateRandomNo() };
      });
    });
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
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-el">{diceElement}</div>
      <button className="roll-btn" onClick={handleRoll}>
        Roll
      </button>
    </main>
  );
}

export default App;
