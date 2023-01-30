import { Radio, Typography } from "antd";

function StatusFilter() {
  return (
    <div>
      <Typography.Paragraph
        style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
      >
        Filter By Status
      </Typography.Paragraph>

      <Radio.Group>
        <Radio value="All">All</Radio>
        <Radio value="Completed">Completed</Radio>
        <Radio value="Todo">To do</Radio>
      </Radio.Group>
    </div>
  );
}

export default StatusFilter;
