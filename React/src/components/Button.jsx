const Button = (props) => {
  const onClickButton = (e) => {
    console.log(e);
  };
  const onMouseEnterButton = () => {
    console.log("마우스가 올라갔어요");
  };
  console.log(props);
  return (
    <button
      onClick={onClickButton}
      onMouseEnter={onMouseEnterButton}
      style={{ color: props.color }}
    >
      {props.text} {props.color.toUpperCase()} {props.children}button
    </button>
  );
};
Button.defaultProps = {
  color: "grey",
  text: "whyy",
};
export default Button;
