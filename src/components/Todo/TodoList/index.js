import TodoAdd from "../TodoAdd";
import TodoItem from "../TodoItem";

const todoList = [
  { id: 1, task: "Learn React", priority: "High" },
  { id: 2, task: "Learn Express", priority: "High" },
  { id: 3, task: "Learn Redux", priority: "Medium" },
  { id: 4, task: "Learn Firebase", priority: "Medium" },
  { id: 5, task: "Learn Networking", priority: "Low" },
];

function TodoList() {
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
