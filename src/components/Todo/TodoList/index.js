import TodoAdd from "../TodoAdd";
import TodoItem from "../TodoItem";

const todoList = [
  { id: 1, title: "Learn React", priority: "High" },
  { id: 2, title: "Learn Express", priority: "High" },
  { id: 3, title: "Learn Redux", priority: "Medium" },
  { id: 4, title: "Learn Firebase", priority: "Medium" },
  { id: 5, title: "Learn Networking", priority: "Low" },
];

function TodoList() {
  return (
    <div style={{ height: "50%" }}>
      <div style={{ height: "80%" }}>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>

      <TodoAdd />
    </div>
  );
}

export default TodoList;
