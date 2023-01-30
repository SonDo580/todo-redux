import { Button, Input, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../../redux/actions";

function TodoAdd() {
  const dispatch = useDispatch();

  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  const handleClick = () => {
    if (task.trim() === "") {
      return alert("Task must be provided");
    }

    dispatch(
      addTodo({
        id: uuidv4(),
        task: task,
        priority: priority,
        completed: false,
      })
    );
  };

  return (
    <Input.Group style={{ display: "flex" }} compact>
      <Input placeholder="new task" value={task} onChange={handleInputChange} />

      <Select value={priority} onChange={handlePriorityChange}>
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
