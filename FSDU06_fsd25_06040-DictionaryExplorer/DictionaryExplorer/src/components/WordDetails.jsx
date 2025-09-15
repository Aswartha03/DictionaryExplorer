import SynonymChip from "./SynonymChip";

const WordDetails = ({ wordData, onSelectSynonym }) => {
  if (!wordData) return null;
  if (wordData.error) {
    return <div className="text-red-500">{wordData.error}</div>;
  }
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">{wordData.word}</h1>
      {wordData.phonetics && wordData.phonetics[0]?.text && (
        <div>Phonetics: {wordData.phonetics[0].text}</div>
      )}
      {wordData.meanings.map((meaning, index) => (
        <div key={index} className="border-t pt-2">
          <div className="italic">{meaning.partOfSpeech}</div>
          {meaning.definitions.map((def, i) => (
            <div key={i} className="ml-4 mb-2">
              <div>Definition: {def.definition}</div>
              {def.example && <div>Example: "{def.example}"</div>}
            </div>
          ))}
          {meaning.synonyms.length > 0 && (
            <div className="ml-4 flex flex-wrap gap-2 mt-2">
              {meaning.synonyms.map((synonym, i) => (
                <SynonymChip
                  key={i}
                  synonym={synonym}
                  onSelect={onSelectSynonym}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WordDetails;
