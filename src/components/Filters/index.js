import PriorityFilter from "./PriorityFilter";
import SearchField from "./SearchField";
import StatusFilter from "./StatusFilter";

function Filters() {
  return (
    <>
      <SearchField />
      <StatusFilter />
      <PriorityFilter />
    </>
  );
}

export default Filters;
