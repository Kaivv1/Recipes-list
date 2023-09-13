import { useEffect, useRef } from "react";

const Search = ({ query, onChangeQuery }) => {
  const inputEl = useRef(null);

  useEffect(() => {
    function callback(e) {
      if (e.code === "Enter") {
        inputEl.current.focus();
      }
    }

    document.addEventListener("keydown", callback);
  }, [onChangeQuery]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => onChangeQuery(e.target.value)}
        className="search"
        placeholder="Search recipes..."
        ref={inputEl}
      />
    </div>
  );
};

export default Search;
