import { useRef, useState } from "react";
import Button from "./Button";
const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    if (content === "") {
      inputRef.current.focus();
      return; //비어있으면 입력란에 포커스
    }
    onCreate(content);
    setContent("");
  };
  return (
    <div>
      <input
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeydown}
      ></input>
      <Button onClick={onSubmit} />
    </div>
  );
};
export default Editor;
