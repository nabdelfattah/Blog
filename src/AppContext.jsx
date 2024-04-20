import { createContext, useState } from "react";
import data from "./content.json";

export const AppContext = createContext({
  articles: [],
  setArticles: (val) => {},
});

function AppContextProvider(props) {
  const [articles, setArticles] = useState(data);
  return (
    <AppContext.Provider value={{ articles, setArticles }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
