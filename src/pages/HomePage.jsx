import axios from "../api/axios";
import { useEffect, useState } from "react";
import { useLoaderContext } from "../../context/LoaderContext";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import { useSearchContext } from "../../context/SearchContext";

export default function HomePage() {
  const { books, setBooks, resultsSearch, searchValue } = useSearchContext();
  const { setIsLoading } = useLoaderContext();
  useEffect(() => {
    if (!resultsSearch) {
      setIsLoading(true);
      axios
        .get(`/books`)
        .then((res) => {
          setBooks(res.data);
        })
        .catch((err) => {
          console.error("Errore nel recupero dei libri:", err);
        })
        .finally(() => setIsLoading(false));
    }
  }, [resultsSearch]);

  return (
    <>
      <Container>
        <div className="text-gray-500 p-4">
          <Heading level={1}>Lista Libri</Heading>
        </div>
        {resultsSearch && books.length === 0 ? (
          <div className="text-gray-500 p-4">
            <Heading level={3}>Nessun risultato trovato.</Heading>
          </div>
        ) : (
          <Container size="sm">
            {resultsSearch && searchValue && (
              <div className="text-gray-500 py-4">
                <Heading level={3}>
                  Stai cercando per "{searchValue}". Clicca su cerca per tornare
                  alla lista completa.
                </Heading>
              </div>
            )}

            <div className="grid grid-cols-12 gap-4">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4"
                >
                  <Card
                    image={book.image}
                    title={book.title}
                    originalTitle={book.originalTitle}
                    description={book.description}
                    author={book.author}
                    genre={book.genre}
                    link={`/books/${book.id}`}
                    price={book.price}
                    editor={book.editor}
                  />
                </div>
              ))}
            </div>
          </Container>
        )}
      </Container>
    </>
  );
}
