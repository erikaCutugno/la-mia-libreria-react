import { Link, useNavigate } from "react-router-dom";
import { useSearchContext } from "../../context/SearchContext";
import SearchBar from "./SearchBar";
import axios from "../api/axios";

export default function Header() {
  const { setBooks, setResultsSearch } = useSearchContext();
  const navigate = useNavigate();
  const handleHomeClick = () => {
    axios.get("/books").then((res) => {
      setBooks(res.data);
      setResultsSearch(false);
      navigate("/"); // torna alla home
    });
  };

  return (
    <header className="bg-gray-100 text-blue-900 shadow p-4">
      <nav className="container  flex items-center gap-x-8 mb-7">
        <h1 className="text-xl font-bold">La Mia Libreria</h1>
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={handleHomeClick}
              className="hover:underline cursor-pointer"
            >
              Home
            </button>
          </li>
          {/* Puoi aggiungere altri link qui */}
        </ul>
      </nav>
      <SearchBar />
    </header>
  );
}
