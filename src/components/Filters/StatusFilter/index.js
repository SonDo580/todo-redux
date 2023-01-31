import { Radio, Typography } from "antd";
import { useState } from "react";

function StatusFilter() {
  const [status, setStatus] = useState("All");

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <Typography.Paragraph
        style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
      >
        Filter By Status
      </Typography.Paragraph>

      <Radio.Group value={status} onChange={handleStatusChange}>
        <Radio value="All">All</Radio>
        <Radio value="Completed">Completed</Radio>
        <Radio value="Todo">To do</Radio>
      </Radio.Group>
    </div>
  );
}

export default StatusFilter;
