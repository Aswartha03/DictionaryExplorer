const SuggestionsList = ({ suggestions, onSelect }) => {
  return (
    <div className="absolute right-0 top-0 bg-white dark:bg-gray-800 border rounded shadow-lg max-h-60 overflow-y-auto w-48">
      {suggestions.map((item) => (
        <div
          key={item.word}
          onClick={() => onSelect(item.word)}
          className="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {item.word}
        </div>
      ))}
    </div>
  );
};

export default SuggestionsList;
