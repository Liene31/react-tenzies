export const Die = (props) => {
  console.log(props);
  return (
    <>
      <button className="dice-btn" onClick={props.toggleDice}>
        {props.value}
      </button>
    </>
  );
};
