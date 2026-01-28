import { useState } from "react";
import { nanoid } from "nanoid";
import { Die } from "./Die.jsx";

function App() {
  const [dice, setDice] = useState([1, 2, 3, 4, 5, 6, 1, 2, 3, 4]);

  const generateRandomNo = () => {
    return Math.ceil(Math.random() * 6);
  };

  const getAllRandomDice = () => {
    const randomDice = [];
    for (let i = 0; i < 10; i++) {
      randomDice.push(generateRandomNo());
    }

    return randomDice;
  };

  console.log(getAllRandomDice());

  const diceElement = dice.map((item) => {
    return <Die key={nanoid()} value={item} />;
  });

  return <main>{diceElement}</main>;
}

export default App;
