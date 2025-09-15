export const fetchSuggestions = async (word) => {
  if (!word) return [];
  try {
    const response = await fetch(`https://api.datamuse.com/sug?s=${word}`);
    if (!response.ok) {
      throw new Error("Failed to fetch suggestions");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Datamuse API error:", error);
    return [];
  }
};
