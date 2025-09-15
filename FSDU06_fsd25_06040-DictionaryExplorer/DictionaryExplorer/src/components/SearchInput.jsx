import { useState, useEffect, useRef } from "react";
import { fetchSuggestions } from "../api/datamuse";

const SearchInput = ({ onSearch, setSuggestions }) => {
  const [input, setInput] = useState("");
  const debounceTimeout = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(async () => {
      const data = await fetchSuggestions(e.target.value);
      setSuggestions(data);
    }, 300);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(input);
      setInput("");
      setSuggestions([]);
    }
  };

  return (
    <input
      type="text"
      value={input}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="Type a word and press Enter"
      className="border rounded p-2 w-full dark:bg-gray-800 dark:text-white"
    />
  );
};

export default SearchInput;
