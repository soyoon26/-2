import "./App.css";
import { useRef, useState, useReducer } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const testData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "달리기하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "강아지 산책 시키기",
    date: new Date().getTime(),
  },
];
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      console.log(action.targetID);
      return state.map((item) =>
        item.id === action.targetID ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.targetID);
    default:
      state;
  }
}
function App() {
  const [todos, dispatch] = useReducer(reducer, testData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetID) => {
    dispatch({ type: "UPDATE", targetID: targetID });
  };
  const onDelete = (targetID) => {
    dispatch({ type: "DELETE", targetID: targetID });
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
