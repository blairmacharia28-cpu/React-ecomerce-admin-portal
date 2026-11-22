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
  <div className="mb-6 flex flex-col gap-2">
    <label
      htmlFor={inputId}
      className="font-semibold text-amber-950"
    >
      Search coffee products:
    </label>

    <div className="flex gap-2">
      <input
        id={inputId}
        ref={inputRef}
        type="text"
        placeholder="Search by name, category, or origin..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="w-full max-w-md rounded-lg border border-amber-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-700"
      />

      {searchTerm && (
        <button
          type="button"
          onClick={handleClear}
          className="rounded-lg bg-amber-900 px-4 py-2 text-white hover:bg-amber-800"
        >
          Clear
        </button>
      )}
    </div>
  </div>
);
}

export default SearchBar;