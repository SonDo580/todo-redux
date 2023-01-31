import { Input, Typography } from "antd";
import { useDispatch } from "react-redux";
import { searchTodo } from "../filterSlice";
const { Search } = Input;

function SearchField() {
  const dispatch = useDispatch();

  const handleSearchTextChange = (event) => {
    dispatch(searchTodo(event.target.value));
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
        onChange={handleSearchTextChange}
      />
    </div>
  );
}

export default SearchField;
