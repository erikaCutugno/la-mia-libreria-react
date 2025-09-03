import axios from "../api/axios";
import { useState } from "react";
import { useSearchContext } from "../../context/SearchContext";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const { setBooks, setResultsSearch, setSearchValue } = useSearchContext();

  const handleSearch = (event) => {
    event.preventDefault();
    if (search.trim() === "") {
      axios.get(`/books`).then((res) => {
        setBooks(res.data);
        setResultsSearch(false);
        setSearchValue("");
        // disattiva modalità "search"
      });
      return;
    }

    axios
      .get(`/books/search`, {
        params: {
          query: search,
        },
      })
      .then((res) => {
        setBooks(res.data);
        setResultsSearch(true);
        setSearchValue(search);
        setSearch("");
      });
  };

  return (
    <form onSubmit={handleSearch} className="flex space-x-2">
      <input
        type="search"
        placeholder="Cerca per titolo autore o genere..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-2 rounded bg-white text-black w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
      />
      <button
        type="submit"
        className="bg-blue-900 hover:bg-blue-600 text-white px-4 py-2 rounded-sm transition-all cursor-pointer"
      >
        Cerca
      </button>
    </form>
  );
}
