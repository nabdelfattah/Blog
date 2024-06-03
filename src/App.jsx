import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ArticlePage, ErrorPage, HomePage, PageLayout } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="article/:title" element={<ArticlePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
