import { useState, useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    gender: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();
  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    if (input.name === "") {
      console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select name="gender" value={input.gender} onChange={onChange}>
          <option></option>
          <option>남자</option>
          <option>여자</option>
          <option>모름</option>
        </select>
      </div>
      <div>
        <textarea
          name="bio"
          value={input.bio}
          onChange={onChange}
          placeholder="자기소개"
        />
      </div>
      <div>
        {input.name},{input.birth},{input.gender},{input.bio}
      </div>
      <div>
        <button onClick={onSubmit}>제출</button>
      </div>
    </div>
  );
};

export default Register;
