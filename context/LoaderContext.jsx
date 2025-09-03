import { createContext, useContext, useState } from "react";

//creo il contesto
const LoaderContext = createContext();

//creo il provider
function LoaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
}

//hook per consumare il provider

function useLoaderContext() {
  const context = useContext(LoaderContext);
  return context;
}

export { LoaderProvider, useLoaderContext };
