import Heading from "./Heading";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Card({
  image,
  title,
  originalTitle,
  author,
  description,
  genre,
  link,
  price,
  editor,
}) {
  console.log("Image URL:", image);
  const isAbsoluteUrl =
    image?.startsWith("http://") || image?.startsWith("https://");

  // Costruzione dell'URL corretto per l'immagine
  const imageUrl = isAbsoluteUrl
    ? image
    : `http://localhost:8080/images/${image}`;

  return (
    <div className="bg-gray-50 text-gray-900 rounded-xl shadow-2xl group cursor-pointer min-h-100 h-80 sm:h-130 ">
      <div className="group-hover:hidden h-full w-full">
        <img
          src={imageUrl}
          //   src={`http://localhost:8080/images/${image}`}
          alt={title}
          className="h-full object-contain sm:object-cover w-full bg-gray-50"
        />
      </div>
      <div className="flex-col space-y-2 hidden group-hover:flex h-full p-6">
        <div className="flex flex-wrap justify-between items-center gap-3 pb-3 ">
          <Heading level={2}>{title}</Heading>
          {originalTitle ? (
            <Heading level={2}>({originalTitle})</Heading>
          ) : null}
        </div>
        <Heading level={6}>{author}</Heading>
        <p className="text-sm">Prezzo: {price} €</p>
        <p className="text-sm">Editore: {editor}</p>
        <p className="text-sm">Genere: {genre.name}</p>
        <p className="text-sm">Descrizione: {description}</p>
        <div className="mt-auto text-center">
          <Link to={link}>
            <Button>Leggi di più</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
