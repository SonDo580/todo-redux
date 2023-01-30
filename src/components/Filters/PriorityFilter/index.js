import { Select, Typography } from "antd";

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
      ></Select>
    </div>
  );
}

export default PriorityFilter;
