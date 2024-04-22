import { useState } from "react";
import "./App.css";
import Light from "./components/signUp/Light";
import Counter from "./components/signUp/Counter";
import Register from "./components/signUp/Register";
import Viewer from "./components/counterApp/Viewer";
import Controller from "./components/counterApp/Controller";
function App() {
  const [count, setCount] = useState(0);
  const onClickButton = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <h1>React Counter App</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
