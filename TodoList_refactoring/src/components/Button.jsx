const Button = ({ text = "추가", color = "blue", onClick }) => {
  const onClickButtion = (e) => {
    console.log(e);
    console.log(text);
    onClick();
  };

  return (
    <button onClick={onClickButtion} style={{ color: color }}>
      {text}
    </button>
  );
};

export default Button;
