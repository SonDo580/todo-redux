import { Input, Typography } from "antd";
const { Search } = Input;

function SearchField() {
  return (
    <div>
      <Typography.Paragraph
        style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
      >
        Search
      </Typography.Paragraph>
      <Search placeholder="input search text" />
    </div>
  );
}

export default SearchField;
