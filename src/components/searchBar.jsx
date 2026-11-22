import { useId, useRef } from "react";
import useProducts from "../hooks/useProducts";

function SearchBar() {
  const { searchTerm, setSearchTerm } = useProducts();

  const inputId = useId();
  const inputRef = useRef(null);

  function handleClear() {
    setSearchTerm("");
    inputRef.current.focus();
  }

  return (
    <div>
      <label htmlFor={inputId}>Search coffee products:</label>

      <input
        id={inputId}
        ref={inputRef}
        type="text"
        placeholder="Search by name, category, or origin..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      {searchTerm && (
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      )}
    </div>
  );
}

export default SearchBar;