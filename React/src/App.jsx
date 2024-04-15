import Header from "./components/Header"; //확장자를 빼도 괜찮음, vite 자동설정
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  const [state, setState] = useState(0); //변수의 값, 감시하는 상태
  console.log(state);
  console.log(setState);
  const buttonProps = {
    text: "A",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      <Header />
      <Main />
      <h1>Hey, Whats up</h1>
      <Button {...buttonProps} />
      <Button text={"B"} color={"pink"} />
      <Button text={"C"} color={"green"} />
      <Button text={"D"} />
      <Button>
        <div>자식요소</div>
      </Button>
      <h1>{state}</h1>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        +
      </button>
      <Footer />
    </>
  );
}

// state 상태 관리 - 쉬운 화면 업데이트
// 가지고 있는 형태나 모양을 정의, 변화할 수 있는 동적인 값

export default App;
