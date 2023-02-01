import { Checkbox, Row, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleStatus, toggleStatusThunk } from "../todoSlice";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

function TodoItem(props) {
  const dispatch = useDispatch();

  const {
    todo: { task, priority, completed, id },
  } = props;

  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked((prevChecked) => !prevChecked);
    dispatch(
      toggleStatusThunk({
        id,
        task,
        priority,
        completed: !completed,
      })
    );
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: "5px",
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {task}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]}>{priority}</Tag>
    </Row>
  );
}

export default TodoItem;
