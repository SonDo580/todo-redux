import { useSelector } from "react-redux";
import TodoAdd from "../TodoAdd";
import TodoItem from "../TodoItem";

function TodoList() {
  const todoList = useSelector((state) => state.todos);
  const searchText = useSelector((state) => state.filters.search);

  const todoRemain = searchText
    ? todoList.filter((todo) => todo.task.includes(searchText))
    : todoList;

  return (
    <div style={{ height: "50%" }}>
      <div style={{ height: "80%", overflow: "auto" }}>
        {todoRemain.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>

      <TodoAdd />
    </div>
  );
}

export default TodoList;
