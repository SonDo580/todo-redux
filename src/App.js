import "./App.css";
import { Divider, Typography } from "antd";
import Filters from "./components/Filters";

const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
    </div>
  );
}

export default App;
