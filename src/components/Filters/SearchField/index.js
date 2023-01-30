import { Input, Typography } from "antd";
import { useState } from "react";
const { Search } = Input;

function SearchField() {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <Typography.Paragraph
        style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
      >
        Search
      </Typography.Paragraph>
      <Search
        placeholder="input search text"
        value={searchText}
        onChange={handleSearchTextChange}
      />
    </div>
  );
}

export default SearchField;
