import { Checkbox, Row, Tag } from "antd";
import { useState } from "react";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

function TodoItem(props) {
  const {
    todo: { task, priority, completed },
  } = props;

  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: "5px",
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox onChange={toggleCheckbox}>{task}</Checkbox>
      <Tag color={priorityColorMapping[priority]}>{priority}</Tag>
    </Row>
  );
}

export default TodoItem;
