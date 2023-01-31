import { Select, Typography } from "antd";
import { useDispatch } from "react-redux";
import { filterByPriority } from "../filterSlice";

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

  const handlePriorityChange = (value) => {
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
        onChange={handlePriorityChange}
      ></Select>
    </div>
  );
}

export default PriorityFilter;
