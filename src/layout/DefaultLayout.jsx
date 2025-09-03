import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";
import { useLoaderContext } from "../../context/LoaderContext";

export default function DefaultLayout() {
  const { isLoading } = useLoaderContext();
  return (
    <>
      <Header />
      <main className="min-h-dvh bg-gray-100">
        {isLoading ? <Loader /> : <Outlet />}
      </main>
      <Footer />
    </>
  );
}
