import { Select, Typography } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByPriority } from "../../../redux/actions";

const options = [
  {
    value: "High",
    label: "High",
  },
  {
    value: "Medium",
    label: "Medium",
  },
  {
    value: "Low",
    label: "Low",
  },
];

function PriorityFilter() {
  const dispatch = useDispatch();

  const [priorities, setPriorities] = useState([]);

  const handlePriorityChange = (value) => {
    setPriorities(value);
    dispatch(filterByPriority(value));
  };

  return (
    <div>
      <Typography.Paragraph
        style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
      >
        Filter By Priority
      </Typography.Paragraph>

      <Select
        mode="multiple"
        style={{ width: "100%" }}
        options={options}
        value={priorities}
        onChange={handlePriorityChange}
      ></Select>
    </div>
  );
}

export default PriorityFilter;
