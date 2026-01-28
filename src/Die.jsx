export const Die = (props) => {
  const diceClicked = {
    backgroundColor: props.isHeld ? "green" : "#ffffff",
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
