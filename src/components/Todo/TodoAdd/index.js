import { Button, Input, Select, Tag } from "antd";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/actions";

function TodoAdd() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addTodo({ id: 1000, title: "Test", priority: "High", completed: false })
    );
  };

  return (
    <Input.Group style={{ display: "flex" }} compact>
      <Input placeholder="new task" />

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
