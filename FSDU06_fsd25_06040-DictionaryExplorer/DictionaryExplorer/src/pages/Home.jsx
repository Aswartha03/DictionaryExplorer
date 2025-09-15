import { useState } from "react";
import SearchInput from "../components/SearchInput";
import SuggestionsList from "../components/SuggestionsList";
import WordDetails from "../components/WordDetails";
import HistoryPanel from "../components/HistoryPanel";
import DarkModeToggle from "../components/DarkModeToggle";
import { fetchWordDetails } from "../api/dictionary";

const Home = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [wordData, setWordData] = useState(null);
  const [history, setHistory] = useState([]);

  const handleSearch = async (word) => {
    const data = await fetchWordDetails(word);
    setWordData(data);
    if (!data.error) {
      setHistory((prev) => {
        const newHistory = [word, ...prev.filter((w) => w !== word)];
        return newHistory.slice(0, 5);
      });
    }
  };

  const handleSelectSynonym = (synonym) => {
    handleSearch(synonym);
  };

  const handleSelectHistory = (word) => {
    handleSearch(word);
  };

  const handleSelectSuggestion = (word) => {
    handleSearch(word);
    setSuggestions([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Dictionary App</h1>
        <DarkModeToggle />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <SearchInput onSearch={handleSearch} setSuggestions={setSuggestions} />
          {suggestions.length > 0 && (
            <SuggestionsList suggestions={suggestions} onSelect={handleSelectSuggestion} />
          )}
          <WordDetails wordData={wordData} onSelectSynonym={handleSelectSynonym} />
        </div>
        <div className="w-full md:w-64">
          <HistoryPanel history={history} onSelect={handleSelectHistory} />
        </div>
      </div>
    </div>
  );
};

export default Home;
