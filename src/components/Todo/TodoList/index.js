import { useSelector } from "react-redux";
import TodoAdd from "../TodoAdd";
import TodoItem from "../TodoItem";

function TodoList() {
  const todoList = useSelector((state) => state.todos);

  return (
    <div style={{ height: "50%" }}>
      <div style={{ height: "80%", overflow: "auto" }}>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>

      <TodoAdd />
    </div>
  );
}

export default TodoList;
