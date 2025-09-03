import { BrowserRouter, Routes, Route } from "react-router-dom";
//context
import { LoaderProvider } from "../context/LoaderContext";
import { SearchProvider } from "../context/SearchContext";

import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import SinglePage from "./pages/SinglePage";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <LoaderProvider>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index path="/" element={<HomePage />} />
              <Route path="books/:id" element={<SinglePage />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </LoaderProvider>
  );
}
