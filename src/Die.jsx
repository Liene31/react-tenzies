export const Die = (props) => {
  const diceClicked = {
    backgroundColor: props.isHeld ? "#59E391" : "#ffffff",
  };

  return (
    <>
      <button
        className="dice-btn"
        style={diceClicked}
        onClick={props.toggleDice}
      >
        {props.value}
      </button>
    </>
  );
};
