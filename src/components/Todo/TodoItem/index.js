import { Checkbox, Row, Tag } from "antd";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

function TodoItem(props) {
  const {
    todo: { title, priority },
  } = props;

  return (
    <Row justify="space-between" style={{ marginBottom: "5px" }}>
      <Checkbox>{title}</Checkbox>
      <Tag color={priorityColorMapping[priority]}>{priority}</Tag>
    </Row>
  );
}

export default TodoItem;
