import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageLayout } from "./pages/PageLayout";
import { HomePage } from "./pages/HomePage";
import { ArticlePage } from "./pages/ArticlePage";
import { ErrorPage } from "./pages/ErrorPage";
// import { HomePage, ArticlePage, PageLayout, ErrorPage } from "./pages";

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
