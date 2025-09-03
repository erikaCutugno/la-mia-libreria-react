import axios from "../api/axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import { useLoaderContext } from "../../context/LoaderContext";
import { useSearchContext } from "../../context/SearchContext";

export default function SinglePage() {
  const { setIsLoading } = useLoaderContext();
  const { resultsSearch } = useSearchContext();
  const navigate = useNavigate();
  const [book, setBook] = useState({ review: [] });
  const { id } = useParams();

  const fetchBook = () => {
    setIsLoading(true);
    axios
      .get(`/books/${id}`)
      .then((res) => {
        setBook(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/404");
        }
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(fetchBook, [id, navigate, setIsLoading]);

  useEffect(() => {
    if (resultsSearch) {
      navigate("/");
    }
  }, [resultsSearch, navigate]);

  return (
    <div className="p-6">
      <Container size="sm">
        <Link to="/">
          <i className="fa-solid fa-arrow-left my-6 text-blue-900"></i>
          <span className=" text-blue-900 text-lg font-medium">
            Torna indietro
          </span>
        </Link>
        <section className="flex flex-wrap bg-gray-50 rounded-xl shadow-2xl ">
          <div className=" w-full  sm:w-1/2 lg:w-1/3">
            <img
              src={`http://localhost:8080/images/${book.image}`}
              alt={book.title}
              className="w-full h-full"
            />
          </div>
          <div className="text-gray-900 p-4 space-y-4 sm:w-1/2 lg:w-2/3">
            <Heading level={2}>{book.title}</Heading>
            {book.originalTitle ? (
              <Heading level={2}>({book.originalTitle})</Heading>
            ) : null}
            <Heading level={6}>{book.author}</Heading>
            <p className="text-sm">Prezzo: {book.price} €</p>
            <p className="text-sm">Editore: {book.editor}</p>
            <p className="text-sm">Genere: {book.genre?.name}</p>
            <p className="text-sm">ISBN: {book.isbn}</p>
            <p className="text-sm">
              Anno di pubblicazione: {book.publicationYear}
            </p>
            <p className="text-sm">Pagine: {book.pages}</p>
            <p className="text-sm">Descrizione: {book.description}</p>
          </div>
        </section>
      </Container>
    </div>
  );
}
