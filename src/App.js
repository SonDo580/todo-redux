import "./App.css";
import { Typography } from "antd";
import Filters from "./components/Filters";

const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Filters />
    </div>
  );
}

export default App;
