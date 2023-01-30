import { Button, Input, Select, Tag } from "antd";

function TodoAdd() {
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
      <Button type="primary">Add</Button>
    </Input.Group>
  );
}

export default TodoAdd;
