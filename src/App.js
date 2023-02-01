import "./App.css";
import { Divider, Typography } from "antd";
import Filters from "./components/Filters";
import TodoList from "./components/Todo/TodoList";
import { setupServer } from "./fakeAPIs";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./components/Todo/todoSlice";
const { Title } = Typography;

// if (process.env.NODE_ENV === 'development') {
setupServer();
// }

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className="App">
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
