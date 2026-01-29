import { useState } from "react";
import Confetti from "react-confetti";
import { nanoid } from "nanoid";
import { Die } from "./Die.jsx";

function App() {
  //adding function () => in useState prevents
  //calling the getAllRandomDice() every time the state changes ->
  //on roll and dice clicks
  const [dice, setDice] = useState(() => getAllRandomDice());

  function generateRandomNo() {
    return Math.ceil(Math.random() * 6);
  }

  function getAllRandomDice() {
    const arr = Array.from({ length: 10 }).map(() => {
      return { id: nanoid(), value: generateRandomNo(), isHeld: false };
    });

    return arr;
  }

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  function handleRoll() {
    if (gameWon) {
      setDice(getAllRandomDice());
    } else {
      setDice((prev) => {
        return prev.map((item) => {
          return item.isHeld === true
            ? { ...item }
            : { ...item, value: generateRandomNo() };
        });
      });
    }
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
      {gameWon && <Confetti />}
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>

      <div className="dice-el">{diceElement}</div>
      <button className="roll-btn" onClick={handleRoll}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
