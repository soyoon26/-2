import { useState } from "react";
import TodoItem from "./TodoItem";
import { useMemo } from "react";
import "./List.css";
const List = ({ todos, onUpdate, onDelete }) => {
  console.log(todos);
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filterdTodos = getFilteredData();
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [todos]); // 빈배열은 변화되어도 바뀌지 않음, 연산최적화

  //const { totalCount, doneCount, notDoneCount } = getAnalyzedData();
  return (
    <div className="List">
      <h4>TodoList</h4>
      <div>
        <div>Total : {totalCount}</div>
        <div>Done : {doneCount}</div>
        <div>notDone : {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      ></input>
      <div>
        {filterdTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};
export default List;
