import { createContext, useContext, useState } from "react";

//creo il contesto

const SearchContext = createContext();

//Provider

function SearchProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [resultsSearch, setResultsSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContext.Provider
      value={{
        books,
        setBooks,
        resultsSearch,
        setResultsSearch,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearchContext() {
  const context = useContext(SearchContext);
  return context;
}

export { SearchProvider, useSearchContext };
