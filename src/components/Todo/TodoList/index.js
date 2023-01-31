import { useSelector } from "react-redux";
import { todosRemainSelector } from "../../../redux/selectors";
import TodoAdd from "../TodoAdd";
import TodoItem from "../TodoItem";

function TodoList() {
  const todosRemain = useSelector(todosRemainSelector);

  return (
    <div style={{ height: "50%" }}>
      <div style={{ height: "80%", overflow: "auto" }}>
        {todosRemain.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>

      <TodoAdd />
    </div>
  );
}

export default TodoList;
