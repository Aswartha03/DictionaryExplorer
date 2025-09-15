const SynonymChip = ({ synonym, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(synonym)}
      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
    >
      {synonym}
    </button>
  );
};

export default SynonymChip;
