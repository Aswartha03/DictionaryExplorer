const HistoryPanel = ({ history, onSelect }) => {
  return (
    <div className="border rounded p-2 space-y-1 bg-white dark:bg-gray-800">
      <h2 className="font-bold">History</h2>
      {history.map((word, index) => (
        <div
          key={index}
          onClick={() => onSelect(word)}
          className="cursor-pointer text-blue-600 hover:underline"
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default HistoryPanel;
