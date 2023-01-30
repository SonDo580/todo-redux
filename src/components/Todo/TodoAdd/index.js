import { Button, Input, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../../redux/actions";

function TodoAdd() {
  const dispatch = useDispatch();

  const [task, setTask] = useState("");

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        task,
        priority: "High",
        completed: false,
      })
    );
  };

  return (
    <Input.Group style={{ display: "flex" }} compact>
      <Input placeholder="new task" value={task} onChange={handleInputChange} />

      <Select defaultValue="Medium">
        <Select.Option value="High" label="High">
          <Tag color="red">High</Tag>
        </Select.Option>
        <Select.Option value="Medium" label="Medium">
          <Tag color="blue">Medium</Tag>
        </Select.Option>
        <Select.Option value="Low" label="Low">
          <Tag color="gray">Low</Tag>
        </Select.Option>
      </Select>

      <Button type="primary" onClick={handleClick}>
        Add
      </Button>
    </Input.Group>
  );
}

export default TodoAdd;
