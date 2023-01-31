import { Radio, Typography } from "antd";
import { useDispatch } from "react-redux";
import { filterByStatus } from "../../../redux/actions";

function StatusFilter() {
  const dispatch = useDispatch();

  const handleStatusChange = (event) => {
    dispatch(filterByStatus(event.target.value));
  };

  return (
    <div>
      <Typography.Paragraph
        style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
      >
        Filter By Status
      </Typography.Paragraph>

      <Radio.Group defaultValue="All" onChange={handleStatusChange}>
        <Radio value="All">All</Radio>
        <Radio value="Completed">Completed</Radio>
        <Radio value="Todo">To do</Radio>
      </Radio.Group>
    </div>
  );
}

export default StatusFilter;
